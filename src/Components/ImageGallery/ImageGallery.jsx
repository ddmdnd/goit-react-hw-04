import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ test }) => {
  return (
    <ul className={css.imageList}>
      {test.map((link) => {
        return (
          <li className={css.imageListItem} key={link.id}>
            <ImageCard test={link} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
