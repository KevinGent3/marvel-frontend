const Pagination = ({ setSkip, skip, limit }) => {
  return (
    <div className="pagination">
      {skip > 0 && (
        <button
          className="previous"
          onClick={() => {
            skip > 0 && setSkip(skip - limit);
          }}
        >
          Previous
        </button>
      )}

      <button
        className="next"
        onClick={() => {
          setSkip(skip + limit);
        }}
      >
        Next
      </button>
      <div></div>
    </div>
  );
};

export default Pagination;
