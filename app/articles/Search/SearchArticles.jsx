import { Search } from "lucide-react";
import SelectCategories from "./SelectCategories";

export default function SearchArticles() {
  return (
    <form action="">
      <div className="flex flex-col sm:flex-row gap-1.5 items-center justify-center">
        <div className="w-full sm:w-45 h-10 bg-white rounded-md">
          <SelectCategories />
        </div>
        <div className="relative w-100 h-10">
          <input
            type="text"
            className="w-full h-full px-3 py-2 ps-8 bg-white rounded-md"
            placeholder="Search Articles"
          />
          <button className="absolute mx-auto opacity-50 hover:opacity-100 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <Search size={16} />
          </button>
        </div>
      </div>
      <div>{/* Fetcched data goes here*/}</div>
    </form>
  );
}
