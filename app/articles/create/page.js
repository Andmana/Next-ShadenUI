import AdminLayout from "@/components/Layout/AdminLayout";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormCreate from "./FormCreate";

const CreateArticle = () => {
  return (
    <AdminLayout title={"Article"}>
      <div>
        <div className="p-5 border-b-1 ">
          <Link href={"/articles"} className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <span className="text-base font-medium">Create Articles</span>
          </Link>
        </div>

        <FormCreate />
      </div>
    </AdminLayout>
  );
};

export default CreateArticle;
