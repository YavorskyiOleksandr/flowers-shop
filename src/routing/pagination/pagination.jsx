import React from "react";
import './pagination.css';

export const Pagination = ({ seedlingsPerPage, totalSeedlings, paginate }) => {
  const paginationPage = [];

  for (let i = 1; i <= Math.ceil(totalSeedlings / seedlingsPerPage); i++) {
    paginationPage.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {paginationPage.map((number) => (
          <li className="pagination-page" key={number}>
            <button className="pagination-page_link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
