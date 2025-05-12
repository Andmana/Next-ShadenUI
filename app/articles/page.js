import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";
import Hero from "./Hero";
import ArticlesContent from "./ArticlesContent";
import Navbar from "@/components/navbar/Navbar";

const Articles = async ({ searchParams }) => {
  return (
    <>
      <Navbar className="static sm:fixed sm:bg-transparent" />

      {/* content */}
      <main className="flex-1 w-full bg-white">
        <Hero />

        <section className="w-full h-fit px-5 py-10 sm:p-25 sm:pt-10 bg-white">
          <div className="w-full h-fit flex flex-col gap-6">
            <Suspense fallback={<ArticlesSkeleton />}>
              <ArticlesContent searchParams={searchParams} />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Articles;
