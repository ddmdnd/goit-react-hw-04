import axios from "axios";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageModal from "./Components/ImageModal/ImageModal";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./Components/Loader/Loader";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getImages } from "./Components/api/imageApi";

function App() {
  const [imagesState, setImagesState] = useState([]);
  const [inputStorageValue, setInputStorageValue] = useState();

  useEffect(() => {
    const processingRequestImages = async () => {
      if (inputStorageValue) {
        const dataServer = await getImages(inputStorageValue);
        setImagesState(dataServer);
      }
    };
    processingRequestImages();
  }, [inputStorageValue]);
  const searchSubmit = (valueInput) => {
    setInputStorageValue(valueInput);
  };

  return (
    <>
      <SearchBar onSubmit={searchSubmit} />
      <ImageGallery test={imagesState} />
    </>
  );
}

export default App;
