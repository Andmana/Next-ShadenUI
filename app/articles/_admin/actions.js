// app/actions/article.ts
"use server";

import { verifySession } from "@/lib/sessions";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function deleteArticle(articleId) {
  const { token } = await verifySession();

  if (!token) {
    return { error: "Unauthorized - Please log in" };
  }

  try {
    const response = await axios.delete(
      `https://test-fe.mysellerpintar.com/api/articles/${articleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 5000,
      }
    );

    if (response.status !== 200) {
      return { error: "Failed to delete article" };
    }

    // Revalidate the cache for the articles page
    revalidatePath("/articles");

    return { success: true };
  } catch (error) {
    console.error("Delete article error:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to delete article",
    };
  }
}
