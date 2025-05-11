import CardList from "./CardList";
import axios from "axios";
import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";
import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import Hero from "./Hero";

const DEFAULT_PAGE = "1";
const DEFAULT_LIMIT = "9";

const ArticlesContent = async ({ searchParams }) => {
  // Validate and sanitize searchParams
  const { page, limit, category, title } = searchParams || {};

  // Construct query parameters safely
  const queryParams = new URLSearchParams();
  queryParams.set("page", page || DEFAULT_PAGE);
  queryParams.set("limit", limit || DEFAULT_LIMIT);
  if (category) queryParams.set("category", encodeURIComponent(category));
  if (title) queryParams.set("title", encodeURIComponent(title));

  try {
    const res = await axios.get(
      `https://test-fe.mysellerpintar.com/api/articles?${queryParams.toString()}`,
      {
        timeout: 5000,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    if (!res.data?.data) {
      throw new Error("Invalid data structure from API");
    }

    const articles = res.data.data;
    const totalArticles = res.data.total || 0;

    return (
      <>
        {totalArticles > 0 && (
          <p className="text-base font-medium hidden sm:block">
            Showing: {articles.length} of {totalArticles} articles
          </p>
        )}

        {articles.length === 0 ? (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-600">
            No articles found matching your criteria
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-15 gap-x-4">
            <CardList articles={articles} />
          </div>
        )}
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

const Articles = async ({ searchParams }) => {
  return (
    <>
      <Hero />

      <section className="w-full h-fit px-5 py-10 sm:p-25 sm:pt-10 bg-white">
        <div className="w-full h-fit flex flex-col gap-6">
          <Suspense fallback={<ArticlesSkeleton />}>
            <ArticlesContent searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Articles;
