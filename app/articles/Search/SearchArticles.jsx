"use client";

import SelectCategories from "./SelectCategories";
import InputPopper from "./InputPopper";
import { useState } from "react";

export default function SearchArticles() {
  const [category, setCategory] = useState(undefined);
  return (
    <div className="flex flex-col sm:flex-row gap-1.5 items-center justify-center">
      <div className="w-full sm:w-45 h-10 bg-white rounded-md">
        <SelectCategories setCategory={setCategory} />
      </div>
      <InputPopper category={category} />
    </div>
  );
}
