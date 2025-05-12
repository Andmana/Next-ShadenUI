import ArticleCard from "@/components/cards/ArticleCard";
import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import axios from "axios";

const OtherArticles = async ({ categoryId }) => {
  const queryParams = new URLSearchParams({ category: categoryId, limit: "3" });
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

    return (
      <section className="px-5 sm:px-45 pt-10 pb-15 sm:pt-10 sm:pb-25 ">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-xl">Other Articles</h2>
          {articles.length === 0 ? (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-600">
              No articles found matching your criteria
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
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

export default OtherArticles;
