import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import AdminLayout from "@/components/Layout/AdminLayout";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormEdit from "./FormEdit";

const Page = async ({ params }) => {
  const { id } = await params;
  try {
    const res = await axios.get(
      `https://test-fe.mysellerpintar.com/api/articles/${id}`,
      {
        timeout: 5000,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    if (!res.data) {
      throw new Error("Invalid data structure from API");
    }

    const article = res.data;

    return (
      <AdminLayout title={"Article"}>
        <div>
          <div className="p-5 border-b-1 ">
            <Link href={"/articles"} className="flex items-center gap-2">
              <ArrowLeft size={20} />
              <span className="text-base font-medium">Edit Articles</span>
            </Link>
          </div>
          <FormEdit article={article} />
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

export default Page;
