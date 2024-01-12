import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (e, index) => {
    e.preventDefault();
    setActivePage(index);
    onPageChange(index);
  };

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={activePage === 1}>
        <PaginationLink first href="#" onClick={(e) => handlePageClick(e, 1)} />
      </PaginationItem>
      <PaginationItem disabled={activePage === 1}>
        <PaginationLink
          previous
          href="#"
          onClick={(e) => handlePageClick(e, activePage - 1)}
        />
      </PaginationItem>
      {[...Array(pagesCount)].map((page, i) => (
        <PaginationItem active={i + 1 === activePage} key={i}>
          <PaginationLink onClick={(e) => handlePageClick(e, i + 1)} href="#">
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={activePage === pagesCount}>
        <PaginationLink
          next
          href="#"
          onClick={(e) => handlePageClick(e, activePage + 1)}
        />
      </PaginationItem>
      <PaginationItem disabled={activePage === pagesCount}>
        <PaginationLink
          last
          href="#"
          onClick={(e) => handlePageClick(e, pagesCount)}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
