"use client";

import SelectCategories from "./SelectCategories";
import InputPopper from "./InputPopper";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SearchArticles({
  categoryClass = "sm:w-45",
  categoryLabel = "Set Category",
  articleClass = "w-100",
}) {
  const [category, setCategory] = useState(undefined);
  return (
    <div className="flex flex-col sm:flex-row gap-1.5 items-center justify-center">
      <div
        className={cn("w-full sm:w-45 h-10 bg-white rounded-md", categoryClass)}
      >
        <SelectCategories
          setCategory={setCategory}
          placeHolder={categoryLabel}
        />
      </div>
      <div className={cn("relative h-10 bg-white rounded-md", articleClass)}>
        <InputPopper category={category} />
      </div>
    </div>
  );
}
