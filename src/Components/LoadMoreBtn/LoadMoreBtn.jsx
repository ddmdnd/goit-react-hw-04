import React from "react";

const LoadMoreBtn = ({ page }) => {
  const click = () => {
    page(1);
  };
  return (
    <button type="button" onClick={click}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
