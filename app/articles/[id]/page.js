import Navbar from "@/components/navbar/Navbar";
import { formatToLongDate } from "@/utils/dateformat";
import axios from "axios";
import OtherArticles from "./OtherArticles";
import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";
import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";

const Article = async ({ params }) => {
  const _params = await params;
  // Validate and sanitize searchParams

  try {
    const res = await axios.get(
      `https://test-fe.mysellerpintar.com/api/articles/${_params.id}`,
      {
        timeout: 5000,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    if (!res.data) {
      throw new Error("Invalid data structure from API");
    }

    const article = res.data;

    return (
      <>
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full bg-white px-5 sm:px-40 py-10">
          <article className="flex flex-col gap-10 relative ">
            {/* Article Header */}
            <header className="flex flex-col items-center gap-4">
              <p className="text-slate-600 flex gap-1">
                <span>{formatToLongDate(article.updatedAt)}</span>
                <span>·</span>
                <span>{article.user.username}</span>
              </p>
              <h1 className="font-semibold !text-3xl">{article.title}</h1>
            </header>

            {/* Article Image */}
            <img
              src={article.imageUrl || "/bg-hero.jpg"}
              alt={article.title || "Article image"}
              className="w-full h-120 rounded-md object-cover object-center"
            />

            {/* Article Content */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </main>

        {/* Related Articles */}
        <Suspense fallback={<ArticlesSkeleton />}>
          <OtherArticles
            categoryId={article.categoryId}
            currentArticleId={article.id}
          />
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch articles:", error);

    return (
      <ErrorDisplay
        message={
          error instanceof Error
            ? error.message
            : "Failed to load articles. Please try again later."
        }
      />
    );
  }
};
export default Article;
