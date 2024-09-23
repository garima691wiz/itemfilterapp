import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../features/itemsSlice';

const Pagination = ({ totalItems, itemsPerPage }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.items.currentPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="pagination">
      <ul>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1} className={currentPage === index + 1 ? 'active' : ''}>
            <button onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
