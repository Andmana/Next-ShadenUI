import AdminLayout from "@/components/Layout/AdminLayout";
import { TableAction, TableDescription } from "@/components/tables/TableHeader";
import SearchArticles from "../Search/SearchArticles";
import TableArticles from "./TableArticles";
import axios from "axios";
import Pagin from "@/components/pagination/Pagination";
import { ErrorDisplay } from "../../../components/errorDIsplay/ErrorDisplay";

const DEFAULT_PAGE = "1";
const DEFAULT_LIMIT = "10";
const DEFAULT_SORT_BY = "createdAt";
const DEFAULT_SORT_ORDER = "desc";

const AdminArticles = async ({ searchParams }) => {
  const { page, category, title } = searchParams || {};

  const queryParams = new URLSearchParams({
    limit: DEFAULT_LIMIT,
    sortBy: DEFAULT_SORT_BY,
    sortOrder: DEFAULT_SORT_ORDER,
  });

  queryParams.set("page", page || DEFAULT_PAGE);
  if (category) queryParams.set("category", category); // auto-encoded
  if (title) queryParams.set("title", title);

  try {
    const res = await axios.get(
      `https://test-fe.mysellerpintar.com/api/articles?${queryParams.toString()}`,
      {
        timeout: 5000,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    const articles = res.data?.data ?? [];
    const totalArticles = res.data?.total ?? 0;

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
