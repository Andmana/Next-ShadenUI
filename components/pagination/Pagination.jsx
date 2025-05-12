"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Pagin = ({ page, itemsCount, limit }) => {
  const searchParams = useSearchParams();
  // Check if there's a next page
  const hasNext = parseInt(itemsCount) === parseInt(limit);
  // Check if there's a previous page
  const hasPrevious = parseInt(page) > 1;

  const nextPageParams = new URLSearchParams(searchParams);
  nextPageParams.set("page", parseInt(page) + 1);

  const prevPageParams = new URLSearchParams(searchParams);
  prevPageParams.set("page", parseInt(page) - 1);

  return (
    <Pagination>
      <PaginationContent>
        {/* Disable PaginationPrevious if there's no previous page */}
        <PaginationItem>
          {hasPrevious ? (
            <PaginationPrevious
              href={`/articles?${prevPageParams.toString()}`}
            />
          ) : (
            <Button variant="primary" disabled>
              <ChevronLeft /> Previous
            </Button>
          )}
        </PaginationItem>

        {/* Current page */}
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>

        {/* Pagination Ellipsis */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {/* Disable PaginationNext if there's no next page */}

        <PaginationItem>
          {hasNext ? (
            <PaginationNext href={`/articles?${nextPageParams.toString()}`} />
          ) : (
            <Button variant="primary" disabled>
              Next <ChevronRight />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pagin;
