"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton({ label, className = "" }) {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        disabled={pending}
        type="submit"
        className={cn("bg-blue-500 w-full", className)}
      >
        {pending ? <Loader2 className="animate-spin" /> : label}
      </Button>
    </>
  );
}

export default SubmitButton;
