"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteArticle } from "./actions";
import { useTransition } from "react";

const DeleteArticleButton = ({ children, articleId }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteArticle(articleId);

      if (result?.error) {
        alert(result.error);
      } else {
        // Optionally redirect or show success message
        alert("Article deleted successfully");
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild disabled={isPending}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Articles</AlertDialogTitle>
          <AlertDialogDescription>
            Deleting this article is permanent and cannot be undone. All related
            content will be removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-red-600">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteArticleButton;
