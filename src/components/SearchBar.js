import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
