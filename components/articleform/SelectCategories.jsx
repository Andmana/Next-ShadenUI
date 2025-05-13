"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { categories as categoriesDb } from "@/db/categories";

export function SelectCategories({ defaultValue = null }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategories(categoriesDb);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError(err.message || "Failed to load categories");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-10 bg-gray-100 rounded-md animate-pulse"></div>
    );
  }

  if (error) {
    return (
      <Select disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={error} />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select defaultValue={defaultValue} name="category">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem value={category.id} key={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectCategories;
