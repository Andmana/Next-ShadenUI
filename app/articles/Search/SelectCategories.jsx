import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

export async function SelectCategories() {
  let categories = [];

  try {
    // Using fetch instead of axios for better compatibility with Next.js
    const res = await axios.get(
      "https://test-fe.mysellerpintar.com/api/categories",
      {
        timeout: 5000,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    if (!res.data?.data) {
      throw new Error("Invalid data structure from API");
    }

    categories = res.data.data || [];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    // Optionally return a fallback UI or empty state
    return (
      <Select disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Failed to load categories" />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select name="category">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categories
          .filter((category) => category.id !== "")
          .map((category) => (
            <SelectItem value={category.id} key={category.id}>
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

export default SelectCategories;
