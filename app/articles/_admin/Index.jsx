import AdminLayout from "@/components/Layout/AdminLayout";
import { TableAction, TableDescription } from "@/components/tables/TableHeader";
import SearchArticles from "../../../components/articleSearch/SearchArticles";
import TableArticles from "./TableArticles";
import Pagin from "@/components/pagination/Pagination";
import { ErrorDisplay } from "../../../components/errorDIsplay/ErrorDisplay";
import { getArticles } from "@/db/articles";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 9;

const AdminArticles = async ({ searchParams }) => {
  const { page, category, title, limit } = searchParams || {};

  try {
    const mockApiData = await getArticles(
      title,
      category,
      page || DEFAULT_PAGE,
      limit || DEFAULT_LIMIT
    );

    if (!mockApiData) throw new Error("Fail");

    const articles = mockApiData?.data ?? [];
    const totalArticles = mockApiData.total;

    return (
      <AdminLayout title="Articles">
        <div>
          <TableDescription label="Articles" total={totalArticles} />
          <TableAction label="Articles">
            <SearchArticles
              categoryClass="w-[110px]"
              categoryLabel="Category"
              articleClass="w-60"
            />
          </TableAction>
        </div>

        <div>
          <TableArticles articles={articles} />
        </div>

        <div className="px-4 py-6 bg-gray-50 border-b-1  border-b-slate-200 flex items-center justify-center">
          <Pagin
            _page={page || DEFAULT_PAGE}
            totalItems={totalArticles}
            limit={DEFAULT_LIMIT}
          />
        </div>
      </AdminLayout>
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

export default AdminArticles;
