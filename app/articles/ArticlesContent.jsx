import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticlesContent = async ({ queriesString }) => {
  try {
    const res = await axios.get(
      `https://test-fe.mysellerpintar.com/api/articles?${queriesString}`,
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
