import { verifySession } from "@/lib/sessions";
import AdminArticles from "./_admin/Index";
import UserArticles from "./_user/Index";

const Articles = async ({ searchParams }) => {
  const { role } = await verifySession();
  const _SearchParams = (await searchParams) || {};

  if (role === "Admin") return <AdminArticles searchParams={_SearchParams} />;
  return <UserArticles searchParams={_SearchParams} />;
};

export default Articles;
