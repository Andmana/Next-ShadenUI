"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import axios from "axios";

export function SelectCategories({ setCategory, placeHolder }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://test-fe.mysellerpintar.com/api/categories",
          {
            timeout: 5000,
            validateStatus: (status) => status >= 200 && status < 300,
          }
        );

        if (!response.data?.data) {
          throw new Error("Invalid data structure from API");
        }

        // Filter out categories with empty IDs or names
        const validCategories = response.data.data.filter(
          (category) => category.id && category.name
        );
        setCategories(validCategories);
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
    <Select onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={undefined}>{" All"}</SelectItem>
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
