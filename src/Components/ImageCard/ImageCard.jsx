import React from "react";
import css from "./imageCard.module.css";

const ImageCard = ({ test }) => {
  return (
    <img className={css.imageListItemImg} src={test.urls.small} alt="test" />
  );
};

export default ImageCard;
