import React from "react";
import css from "./imageCard.module.css";

const ImageCard = ({ linkImage }) => {
  return (
    <img
      className={css.imageListItemImg}
      src={linkImage.urls.small}
      alt={linkImage.alt_description}
    />
  );
};

export default ImageCard;
