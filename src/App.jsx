import axios from "axios";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageModal from "./Components/ImageModal/ImageModal";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./Components/Loader/Loader";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getImages } from "./Components/api/imageApi";
import ReactDOM from "react-dom";

function App() {
  const [imagesState, setImagesState] = useState([]);
  const [inputStorageValue, setInputStorageValue] = useState();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const processingRequestImages = async () => {
      try {
        if (inputStorageValue) {
          setError(false);
          setLoad(true);
          const dataServer = await getImages(inputStorageValue, page);
          setImagesState((prev) => [...prev, ...dataServer]);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    processingRequestImages();
  }, [inputStorageValue, page]);
  const searchSubmit = (valueInput) => {
    setImagesState([]);
    setInputStorageValue(valueInput);
  };

  const pageCount = (pageCount) => {
    setPage(page + pageCount);
  };
  const modalAction = (action) => {
    setIsOpen(action);
  };
  return (
    <>
      <SearchBar onSubmit={searchSubmit} />
      {load && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal action={modalAction} result={modalIsOpen} />
      <ImageGallery test={imagesState} />
      {!error && inputStorageValue && <LoadMoreBtn page={pageCount} />}
    </>
  );
}

export default App;
