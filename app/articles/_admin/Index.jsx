import AdminLayout from "@/components/Layout/AdminLayout";
import { TableAction, TableDescription } from "@/components/tables/TableHeader";
import SearchArticles from "../Search/SearchArticles";

const AdminArticles = () => {
  return (
    <AdminLayout title="Articles">
      <div className="">
        <TableDescription label={"Articles"} total={25} />
        <TableAction label={"Articles"}>
          <SearchArticles
            categoryClass="w-[110px]"
            categoryLabel="Category"
            articleClass="w-60"
          />
        </TableAction>
      </div>
    </AdminLayout>
  );
};

export default AdminArticles;
