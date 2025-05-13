"use server";

import { verifySession } from "@/lib/sessions";
import axios from "axios";
import { redirect } from "next/navigation";
import { z } from "zod";

const articleSchema = z.object({
  id: z.string().min(1, { message: "Please enter title" }).trim(),
  title: z.string().min(1, { message: "Please enter title" }).trim(),
  imageUrl: z.string().min(1, { message: "Please enter picture" }),
  category: z.string().min(1, { message: "Please select category" }),
  content: z.string().min(1, { message: "Content field cannot be empty" }),
});

export async function editArticle(prevState, formData) {
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

  const { title, content, category, imageUrl, id } = result.data;

  try {
    // Corrected API endpoint and payload
    const apiRes = await axios.put(
      `https://test-fe.mysellerpintar.com/api/articles/` + id, // Changed from /api/auth/login
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
  } catch (error) {
    console.error("Article Upload:", error);

    // Improved error handling
    let errorMessage = "Failed to update article";
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
