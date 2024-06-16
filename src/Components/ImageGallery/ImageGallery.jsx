import React, { useRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ responseArray, modalImageIs, setArrayClick }) => {
  // const refLi = useRef();
  const openModal = (e) => {
    // modalImageIs(true);
    // arrayTargetClick(e.target);
    console.log(e.target);
    console.log(refLi);
    // arrayTargetClick(e.target);
  };
  return (
    <ul className={css.imageList}>
      {responseArray.map((link) => {
        return (
          <li
            // ref={refLi}
            className={css.imageListItem}
            key={link.id}
            // onClick={openModal}
          >
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
