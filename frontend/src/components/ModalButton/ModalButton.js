import React from "react";

function OpenButton({ setModalIsOpen }) {
  return (
    <button onClick={() => setModalIsOpen(true)}>CONTACT</button>
  );
}

export default OpenButton;