import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";
import Hero from "./Hero";
import ArticlesContent from "./ArticlesContent";

const DEFAULT_PAGE = "1";
const DEFAULT_LIMIT = "9";

const Articles = async ({ searchParams }) => {
  // Validate and sanitize searchParams
  const { page, limit, category, title } = (await searchParams) || {};

  // Construct query parameters safely
  const queryParams = new URLSearchParams();
  queryParams.set("page", page || DEFAULT_PAGE);
  queryParams.set("limit", limit || DEFAULT_LIMIT);
  if (category) queryParams.set("category", encodeURIComponent(category));
  if (title) queryParams.set("title", encodeURIComponent(title));

  return (
    <>
      <Hero />

      <section className="w-full h-fit px-5 py-10 sm:p-25 sm:pt-10 bg-white">
        <div className="w-full h-fit flex flex-col gap-6">
          <Suspense fallback={<ArticlesSkeleton />}>
            <ArticlesContent queriesString={queryParams.toString()} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Articles;
