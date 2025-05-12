"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import axios from "axios";

const InputPopper = ({ category }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const params = { title: searchTerm.trim() };
  if (category) params.category = category;
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

  const queryParams = new URLSearchParams({ ...params });

  return (
    <>
      <div className="relative w-100 h-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="w-full h-full px-3 py-2 ps-8 bg-white rounded-md"
          placeholder="Search Articles"
          onFocus={() => setIsPopoverOpen(true)}
          onBlur={() => setIsPopoverOpen(false)}
        />
        <div className="absolute mx-auto opacity-50 hover:opacity-100 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <Link href={`/articles?${queryParams.toString()}`}>
            <Search size={16} />
          </Link>
        </div>

        <div
          className="absolute w-full top-11/10 rounded-md px-3 py-2 bg-white"
          style={{ scale: isPopoverOpen ? 1 : 0 }}
          aria-hidden={isPopoverOpen ? false : true}
        >
          {isLoading ? (
            <div className="py-2 text-center">Searching...</div>
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
        </div>
      </div>
    </>
  );
};

export default InputPopper;
