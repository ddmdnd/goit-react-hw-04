import React from "react";
import css from "./LoadMoreBrn.module.css";

const LoadMoreBtn = ({ page }) => {
  const click = () => {
    page(1);
  };
  return (
    <div className={css.loadMoreBtmContainer}>
      <button className={css.loadMoreBtm} type="button" onClick={click}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
