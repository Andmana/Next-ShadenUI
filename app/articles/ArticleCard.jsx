import Link from "next/link";
import { formatToLongDate } from "../../utils/dateformat";

const ArticleCard = ({ article }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <img
        src={article.imageUrl || "/bg-hero.jpg"}
        alt="Article cover"
        className="w-full aspect-3/2 sm:h-60 object-cover object-center rounded-xl"
      />
      <div className="w-full flex flex-col gap-2">
        {/* Update date */}
        <p className="text-sm text-slate-600">
          {formatToLongDate(article.updatedAt)}
        </p>

        {/* Title */}
        <Link
          href={`/articles/${article.id}`}
          className="font-semibold text-lg text-slate-900"
        >
          {article.title}
        </Link>

        {/* Content */}
        <p className="text-base text-slate-600">{article.content}</p>

        <p className="w-fit px-3 py-1 rounded-full bg-blue-200">
          <span className="text-sm text-blue-900">{article.category.name}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
