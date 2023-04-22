import React, { memo, useEffect } from "react";
import ReactDOM from "react-dom";

const MyModal = ({ handleCloseModal, children, closeButton }) => {
  // To prevent background page scroll when modal is open
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  // In order to use createPortal, you need to import ReactDOM library and call the createPortal function, passing two arguments:
  // 1: The React element you want to render.
  // 2: The DOM node where you want to render it.

  return ReactDOM.createPortal(
    <>
      {/* To make BG blur  */}
      <div className="modal-wrapper" onClick={handleCloseModal}></div>

      <div className="modal-container">
        {children}
        {closeButton}
      </div>
    </>,

    document.querySelector(".myPortalModalDiv")
  );
};

export default memo(MyModal);
