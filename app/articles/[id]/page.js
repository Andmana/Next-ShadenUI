import Navbar from "@/components/navbar/Navbar";
import axios from "axios";
import OtherArticles from "./OtherArticles";
import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";
import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import Footer from "@/components/footer/Footer";
import ArticlesContent from "./ArticleContent";

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
