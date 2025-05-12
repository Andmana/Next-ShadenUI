const Pagin = ({ page, itemsCount, limit }) => {
  const havePrevious = parseInt(page) > 1;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem disable={havePrevious}>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pagin;
