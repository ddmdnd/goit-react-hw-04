import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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
