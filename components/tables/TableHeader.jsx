import { Plus } from "lucide-react";
import Link from "next/link";

export const TableDescription = ({ label, total }) => {
  return (
    <div className="p-6 border-b-1 border-b-gray-50">
      <h2 className="text-base font-medium text-slate-800">
        Total {label} : {total}
      </h2>
    </div>
  );
};

export const TableAction = ({ children, label }) => {
  return (
    <div className="p-6 border-b-1 border-b-gray-50 flex items-center justify-between">
      {children}
      <Link
        className="h-10 px-4 py-2 flex gap-1.5 bg-blue-600 rounded-md"
        href={`/${label.toString().toLowerCase()}/create`}
      >
        <Plus size={20} color="white" />
        <span className="text-white text-sm font-medium ">Add {label}</span>
      </Link>
    </div>
  );
};
