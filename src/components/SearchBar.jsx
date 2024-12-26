import React from "react";

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    className="search-bar"
    placeholder="Search tasks by title or description..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
