import React, { useRef } from "react";
import css from "./imageCard.module.css";

const ImageCard = ({ linkImage, setArrayClick, modalImageIs }) => {
  const clickImageOne = () => {
    modalImageIs(true);
    console.log(linkImage);
    setArrayClick(linkImage);
  };
  return (
    <img
      className={css.imageListItemImg}
      src={linkImage.urls.small}
      alt={linkImage.alt_description}
      onClick={clickImageOne}
    />
  );
};

export default ImageCard;
