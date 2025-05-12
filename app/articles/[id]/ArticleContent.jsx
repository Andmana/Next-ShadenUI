import { formatToLongDate } from "@/utils/dateformat";

const ArticleContent = ({ article }) => {
  return (
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
          className="w-full aspect-5/3 md:h-120 rounded-md object-cover object-center"
        />

        {/* Article Content */}
        <div
          className="prose max-w-none text-base"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
};

export default ArticleContent;
