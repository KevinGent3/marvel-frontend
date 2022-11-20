import { useState } from "react";

const Pagination = ({ setSkip, skip, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="pagination">
      {skip > 0 && (
        <button
          className="previous"
          onClick={() => {
            skip > 0 && setSkip(skip - limit);
            setCurrentPage(currentPage - 1);
          }}
        >
          Previous
        </button>
      )}

      <span className="pagenumber">Page {currentPage}</span>

      <button
        className="next"
        onClick={() => {
          setSkip(skip + limit);
          setCurrentPage(currentPage + 1);
        }}
      >
        Next
      </button>
      <div></div>
    </div>
  );
};

export default Pagination;
