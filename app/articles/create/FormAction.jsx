import SubmitButton from "@/components/forms/SubmitButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const FormAction = () => {
  return (
    <div className="flex justify-end gap-2">
      <Button type="button" variant="outline">
        <Link href={"/articles"}>Back</Link>
      </Button>
      <Button type="button" variant="secondary">
        Preview
      </Button>
      <SubmitButton label="Upload" className="w-fit" />
    </div>
  );
};

export default FormAction;
