import React from "react";

import "./ModalButton.scss"

function OpenButton({ setModalIsOpen }, ref) {
  return (
    <span
      className="navbar-link"
      ref={ref}
      onClick={() => setModalIsOpen(true)}
    >
    CONTACT
    </span>
  );
}

export default React.forwardRef(OpenButton);