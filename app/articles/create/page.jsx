import InputGroup from "@/components/forms/InputGroup";
import AdminLayout from "@/components/Layout/AdminLayout";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import ImageInput from "./ImageInput";

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
        <div className="p-6 flex flex-col gap-6">
          <InputGroup label={"Thumbnail"}>
            <ImageInput />
          </InputGroup>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateArticle;
