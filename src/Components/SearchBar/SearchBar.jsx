import React from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const SearchBar = ({ onSubmit }) => {
  const searchRequest = (even) => {
    even.preventDefault();
    const searchValue = even.target.elements.search.value;
    onSubmit(searchValue);
    even.target.reset();
  };
  return (
    <header>
      <form onSubmit={searchRequest}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
