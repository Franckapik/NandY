import React from "react";
import Modal from "react-modal";
import store from "../store/store";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: 'hidden',
    minWidth: '300px',
    minHeight: '300px',
  },
};
Modal.setAppElement("#root");

export default function Pop({ children, title }) {
  const isOpen = useSelector((state) => state.dom.isOpen);

  function openModal() {
    store.dispatch({ type: "OPEN MODAL" });
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    store.dispatch({ type: "CLOSE MODAL" });
  }

  return (
    <div className="modal">
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{title}</h2>
        <div className="content"> {children}</div>
      </Modal>
    </div>
  );
}
