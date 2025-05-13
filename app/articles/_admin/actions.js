// app/actions/article.ts
"use server";

import { articles } from "@/db/articles";
import { verifySession } from "@/lib/sessions";
import { revalidatePath } from "next/cache";
import { array } from "zod";

export async function deleteArticle(articleId) {
  const { token } = await verifySession();

  if (!token) {
    return { error: "Unauthorized - Please log in" };
  }

  try {
    const idx = articles.findIndex((item) => item.id === articleId);
    articles.splice(idx, 1);

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
