import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import Pagin from "@/components/pagination/Pagination";

const DEFAULT_PAGE = "1";
const DEFAULT_LIMIT = "9";

const ArticlesContent = async ({ searchParams }) => {
  // Validate and sanitize searchParams
  const { page, limit, category, title } = (await searchParams) || {};

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
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
        <div className=" w-full mt-9 flex justify-center items-center gap-2 text-slate-900">
          <Pagin
            itemsCount={articles.length}
            limit={limit || DEFAULT_LIMIT}
            page={page || DEFAULT_PAGE}
          />
        </div>
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

export default ArticlesContent;
