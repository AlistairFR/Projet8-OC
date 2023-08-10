import React from "react";

import "./ModalButton.scss"

function OpenButton({ setModalIsOpen }) {
  return (
    <span onClick={() => setModalIsOpen(true)}>CONTACT</span>
  );
}

export default OpenButton;