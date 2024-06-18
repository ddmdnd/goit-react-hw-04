import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#rt");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
  },
};
const ImageModal = ({ action, result, arrayClick }) => {
  // function afterOpenModal() {
  //   references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    action(false);
  }
  return (
    <div>
      <Modal
        isOpen={result}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        {arrayClick && (
          <img src={arrayClick.urls.regular} alt={arrayClick.alt_description} />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
