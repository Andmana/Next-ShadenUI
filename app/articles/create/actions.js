"use server";

import { verifySession } from "@/lib/sessions";
import { z } from "zod";
import axios from "axios";
import { redirect } from "next/navigation";

export const uploadImage = async (file) => {
  const { token, role } = await verifySession();
  if (!(token && role === "Admin")) {
    throw new Error("Unauthorized access");
  }

  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(
      "https://test-fe.mysellerpintar.com/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        maxBodyLength: Infinity, // Important for large files
        maxContentLength: Infinity, // Important for large files
      }
    );

    if (!response.data || !response.data.imageUrl) {
      throw new Error("No image URL returned from server");
    }

    return { imageUrl: response.data.imageUrl };
  } catch (error) {
    console.error("Server upload error:", error);
    throw new Error(
      error.response?.data?.message || error.message || "Image upload failed"
    );
  }
};

const articleSchema = z.object({
  title: z.string().min(1, { message: "Please enter title" }).trim(),
  imageUrl: z.string().min(1, { message: "Please enter picture" }),
  category: z.string().min(1, { message: "Please select category" }),
  content: z.string().min(1, { message: "Content field cannot be empty" }),
});

export async function CreateArticle(prevState, formData) {
  console.log("formdata: ", formData);

  const { token, role } = await verifySession();
  if (!(token && role === "Admin")) {
    return {
      errors: {
        root: ["Unauthorized access"],
      },
    };
  }

  // Validate form data
  const result = articleSchema.safeParse(Object.fromEntries(formData)); // Changed from loginSchema to articleSchema
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { title, content, category, imageUrl } = result.data;

  try {
    // Corrected API endpoint and payload
    const apiRes = await axios.post(
      "https://test-fe.mysellerpintar.com/api/articles", // Changed from /api/auth/login
      {
        title,
        content,
        categoryId: category,
        imageUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        timeout: 5000,
      }
    );

    // Removed incorrect session creation (this is for article creation, not login)
    // If you need to update session after article creation, add proper logic here
  } catch (error) {
    console.error("Article creation error:", error);

    // Improved error handling
    let errorMessage = "Failed to create article";
    if (error.response) {
      if (error.response.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response.status === 401) {
        errorMessage = "Unauthorized - Please login again";
      } else if (error.response.status === 400) {
        errorMessage = "Invalid data submitted";
      }
    }

    return {
      errors: {
        root: [errorMessage],
        ...(error.response?.data?.errors || {}), // Include any field-specific errors from API
      },
    };
  }

  redirect("/articles");
}
