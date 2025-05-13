import AdminLayout from "@/components/Layout/AdminLayout";
import { TableAction, TableDescription } from "@/components/tables/TableHeader";
import SearchArticles from "../Search/SearchArticles";
import TableArticles from "./TableArticles";
import axios from "axios";
import Pagin from "@/components/pagination/Pagination";

const DEFAULT_PAGE = "1";
const DEFAULT_LIMIT = "10";

const AdminArticles = async ({ searchParams }) => {
  // Validate and sanitize searchParams
  const { page, category, title } = searchParams;
  const queryParams = new URLSearchParams();
  queryParams.set("page", page || DEFAULT_PAGE);
  queryParams.set("limit", DEFAULT_LIMIT);
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
      <AdminLayout title="Articles">
        <div>
          <TableDescription label={"Articles"} total={totalArticles} />
          <TableAction label={"Articles"}>
            <SearchArticles
              categoryClass="w-[110px]"
              categoryLabel="Category"
              articleClass="w-60"
            />
          </TableAction>
        </div>

        {/* Table */}
        <div>
          <TableArticles articles={articles} />
        </div>

        {/* Pagination */}
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
