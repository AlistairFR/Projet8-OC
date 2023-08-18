import React from "react";

import "./ModalButton.scss"

function OpenButton({ setModalIsOpen }) {
  return (
    <span className="navbar-link" onClick={() => setModalIsOpen(true)}>CONTACT</span>
  );
}

export default OpenButton;