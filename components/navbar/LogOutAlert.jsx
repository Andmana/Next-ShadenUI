"use client";

import { logout } from "@/app/login/actions";
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
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogOutAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {
          <Button
            variant="primary"
            className="!p-1.25 w-full rounded-none flex justify-start items-center gap-2.5 hover:bg-accent hover:text-accent-foreground focus:text-accent-foreground"
          >
            <LogOut color="red" size={16} />
            <span className="text-red-500 font-medium">Log Out</span>
          </Button>
        }
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure want to logout?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => logout()} className="bg-blue-600">
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
