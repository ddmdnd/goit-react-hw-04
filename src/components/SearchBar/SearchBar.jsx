import React from "react";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, inputValue }) => {
  const searchRequest = (even) => {
    even.preventDefault();
    const searchValue = even.target.elements.search.value;
    if (searchValue) {
      onSubmit(searchValue);
    }
    even.target.reset();
  };
  return (
    <div className={css.searchSection}>
      <header className={css.header}>
        <form onSubmit={searchRequest} className={css.searchButtonBox}>
          <button type="submit" className={css.searchBtm}>
            <IoIosSearch />
          </button>
          <input
            className={css.searchInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
