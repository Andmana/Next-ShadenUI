import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatToLongDate } from "@/utils/dateformat";
import Link from "next/link";

import React from "react";
import DeleteArticleButton from "./DeleteArticleButton";

const TableArticles = ({ articles }) => {
  return (
    <div>
      <Table className="table-fixed w-full border-b-1 border-slate-200">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-1/5">Thumbnails</TableHead>
            <TableHead className="w-1/5">Title</TableHead>
            <TableHead className="w-1/5">Category</TableHead>
            <TableHead className="w-1/5">Created at</TableHead>
            <TableHead className="w-1/5">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles
            .filter((article) => article.id != "")
            .map((article) => (
              <TableRow key={article.id}>
                <TableCell>
                  <img
                    src={article.imageUrl || "/bg-hero.jpg"}
                    alt="thumbnail"
                    className="w-15 h-15 aspect-square object-center object-cover rounded-[6px] mx-auto"
                  />
                </TableCell>
                <TableCell className="text-start whitespace-normal break-words">
                  {article.title}
                </TableCell>
                <TableCell>{article.category.name}</TableCell>
                <TableCell>{formatToLongDate(article.updatedAt)}</TableCell>
                <TableCell>
                  <div className="flex gap-3 justify-center">
                    <Link
                      href={`/articles/${article.id}`}
                      className="text-blue-600 underline"
                    >
                      Preview
                    </Link>
                    <Link
                      href={`/articles/edit/${article.id}`}
                      className="text-blue-600 underline"
                    >
                      Edit
                    </Link>
                    <DeleteArticleButton articleId={article.id}>
                      <button className="text-red-500 underline">Delete</button>
                    </DeleteArticleButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableArticles;
