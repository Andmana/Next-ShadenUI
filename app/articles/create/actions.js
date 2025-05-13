"use server";

import { verifySession } from "@/lib/sessions";
import { z } from "zod";
import axios from "axios";
import { redirect } from "next/navigation";
import { articles, constructorArticle } from "@/db/articles";

const articleSchema = z.object({
  title: z.string().min(1, { message: "Please enter title" }).trim(),
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

  const { title, content, category } = result.data;

  try {
    // Corrected API endpoint and payload
    articles.push(constructorArticle(title, category, content));
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
