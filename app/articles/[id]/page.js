import Navbar from "@/components/navbar/Navbar";
import { formatToLongDate } from "@/utils/dateformat";
import axios from "axios";
import OtherArticles from "./OtherArticles";
import { Suspense } from "react";
import { ArticlesSkeleton } from "@/components/loadings/ArticleSkeleton";

const Article = async ({ params }) => {
  const _params = await params;

  const res = await axios.get(
    `https://test-fe.mysellerpintar.com/api/articles/${_params.id}`,
    {
      timeout: 5000,
      validateStatus: (status) => status >= 200 && status < 300,
    }
  );

  const article = res.data;
  return (
    <>
      <Navbar />

      {/* content */}
      <main className="flex-1 w-full bg-white px-5 sm:px-40 py-10">
        <article className="flex flex-col gap-10 relative ">
          <header className="flex flex-col items-center gap-4">
            <p className="text-slate-600 flex gap-1">
              <span>{formatToLongDate(article.updatedAt)}</span>
              <span>·</span>
              <span>{article.user.username}</span>
            </p>
            <h1 className="font-semibold !text-3xl">{article.title}</h1>
          </header>
          <img
            src={article.imageUrl || "/bg-hero.jpg"}
            alt="article image"
            className="w-full h-120 rounded-md object-cover object-center"
          />

          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </main>
      <Suspense fallback={<ArticlesSkeleton />}>
        <OtherArticles categoryId={article.categoryId} />
      </Suspense>
    </>
  );
};

export default Article;
