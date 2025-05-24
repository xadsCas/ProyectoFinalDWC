import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                &lt; Prev
            </button>
            <span>
                Página {currentPage} de {totalPages}
            </span>
            <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                Next &gt;
            </button>
        </div>
    );
};

export default Pagination;
