const Pagination = ({currentPage, totalPages, onPageChange}) => (
    <div className="flex justify-center gap-2 my-4">
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
  export default Pagination;
  