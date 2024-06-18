import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ responseArray, modalImageIs, setArrayClick }) => {
  return (
    <ul className={css.imageList}>
      {responseArray.map((link) => {
        return (
          <li className={css.imageListItem} key={link.id}>
            <ImageCard
              linkImage={link}
              modalImageIs={modalImageIs}
              setArrayClick={setArrayClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
