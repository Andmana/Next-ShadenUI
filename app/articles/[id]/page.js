import Navbar from "@/components/navbar/Navbar";
import axios from "axios";
import OtherArticles from "./OtherArticles";
import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";
import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import Footer from "@/components/footer/Footer";
import ArticlesContent from "./ArticleContent";
import { getArticleById } from "@/db/articles";

const Article = async ({ params }) => {
  const _params = await params;
  // Validate and sanitize searchParams

  try {
    const article = getArticleById(_params.id);

    return (
      <div className="relative min-h-screen sm:min-h-svh text-sm flex flex-col">
        <Navbar />

        {/* Main Content */}
        <ArticlesContent article={article} />

        {/* Related Articles */}
        <Suspense fallback={<ArticlesSkeleton />}>
          <OtherArticles
            categoryId={article.categoryId}
            currentArticleId={article.id}
          />
        </Suspense>
        <Footer />
      </div>
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
