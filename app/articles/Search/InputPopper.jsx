"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";

const InputPopper = ({ category }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Create a ref for the input element to control focus
  const inputRef = useRef(null);

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch search results
  const fetchResults = async (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const params = {
        title: term,
      };

      if (category && category.length > 1) {
        params.category = category;
      }

      const response = await axios.get(
        "https://test-fe.mysellerpintar.com/api/articles",
        {
          params: params,
          timeout: 5000,
        }
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);

      // Ensure input stays focused after data is fetched
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  // Debounced version of fetchResults
  const debouncedFetch = useCallback(
    debounce((term) => fetchResults(term), 500),
    [category] // Recreate when category changes
  );

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedFetch(value);
    setIsPopoverOpen(!!value); // Open popover when typing
  };

  useEffect(() => {
    // Ensure input is focused when the component is mounted or searchTerm changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm]); // Rerun focus logic when searchTerm changes

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-100 h-10">
          <input
            ref={inputRef} // Attach ref to the input element
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="w-full h-full px-3 py-2 ps-8 bg-white rounded-md"
            placeholder="Search Articles"
          />
          <button
            type="button"
            className="absolute mx-auto opacity-50 hover:opacity-100 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <Search size={16} />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-100 border-1 text-sm max-h-60 overflow-y-auto"
      >
        {isLoading ? (
          <div className="p-2 text-center">Searching...</div>
        ) : searchResults.length > 0 ? (
          searchResults.map((article) => (
            <div
              key={article.id}
              className="p-1.25 h-10 hover:bg-accent hover:text-accent-foreground flex items-center"
            >
              <Link
                href={`/articles/${article.id}`}
                className="text-slate-900 underline font-medium w-full"
                onClick={() => setIsPopoverOpen(false)}
              >
                {article.title}
              </Link>
            </div>
          ))
        ) : searchTerm ? (
          <div className="p-2 text-center">No results found</div>
        ) : (
          <div className="p-2 text-center">Start typing to search</div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default InputPopper;
