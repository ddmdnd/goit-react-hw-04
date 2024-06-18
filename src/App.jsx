import axios from "axios";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getImages } from "./components/api/imageApi";

function App() {
  const [imagesState, setImagesState] = useState([]);
  const [inputStorageValue, setInputStorageValue] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [arrayClick, setArrayClick] = useState();

  useEffect(() => {
    const processingRequestImages = async () => {
      if (!inputStorageValue) return;
      setError(false);
      setLoad(true);
      try {
        const dataServer = await getImages(inputStorageValue, page);
        setImagesState((prev) => [...prev, ...dataServer]);
      } catch (e) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    processingRequestImages();
  }, [inputStorageValue, page]);
  const searchSubmit = (valueInput) => {
    if (inputStorageValue != valueInput) {
      setImagesState([]);
    }
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
      <SearchBar onSubmit={searchSubmit} inputValue={inputStorageValue} />
      {load && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal
        action={modalAction}
        result={modalIsOpen}
        arrayClick={arrayClick}
      />
      <ImageGallery
        responseArray={imagesState}
        modalImageIs={modalAction}
        setArrayClick={setArrayClick}
      />
      {!error && inputStorageValue && <LoadMoreBtn page={pageCount} />}
    </>
  );
}

export default App;
