import { verifySession } from "@/lib/sessions";
import AdminArticles from "./_admin/Index";
import UserArticles from "./_user/Index";

const Articles = async ({ searchParams }) => {
  const { role } = await verifySession();

  if (role === "Admin") return <AdminArticles />;
  return <UserArticles />;
};

export default Articles;
