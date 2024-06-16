import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ responseArray }) => {
  return (
    <ul className={css.imageList}>
      {responseArray.map((link) => {
        return (
          <li className={css.imageListItem} key={link.id}>
            <ImageCard linkImage={link} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
