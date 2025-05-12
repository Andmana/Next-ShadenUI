"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams, usePathname } from "next/navigation";

const Pagin = ({ _page, limit, totalItems }) => {
  const page = parseInt(_page);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / limit);

  // Navigation helpers
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Navigation states
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  // Show page numbers (improved logic)
  const visiblePages = () => {
    const pages = [];
    const maxVisible = 5; // Maximum pages to show

    // Always show first page
    pages.push(1);

    // Show pages around current page
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");

    // Always show last page if different from first
    if (totalPages > 1) pages.push(totalPages);

    return pages.slice(0, maxVisible);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          {hasPrevPage ? (
            <PaginationPrevious href={createPageURL(page - 1)} />
          ) : (
            <Button variant="outline" disabled className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
          )}
        </PaginationItem>

        {/* Page Numbers */}
        {visiblePages().map((p, index) => (
          <PaginationItem key={index}>
            {p === "..." ? (
              <Button variant="ghost" disabled>
                ...
              </Button>
            ) : (
              <PaginationLink
                href={createPageURL(Number(p))}
                isActive={p === page}
              >
                {p}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          {hasNextPage ? (
            <PaginationNext href={createPageURL(page + 1)} />
          ) : (
            <Button variant="outline" disabled className="gap-1">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pagin;
