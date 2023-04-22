import React, { memo, useEffect } from "react";

const MyModal = ({ handleCloseModal }) => {
  // To prevent background page scroll when modal is open
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      {/* To make BG blur  */}
      <div className="modal-wrapper" onClick={handleCloseModal}></div>

      <div className="modal-container">
        <h2>MODAL TEMP</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequatur cupiditate ea quia accusamus, deserunt corporis. Ad
          corporis aliquid laborum quaerat inventore cupiditate delectus
          expedita, numquam tempore fugiat facere iusto! Doloremque amet unde
          fuga maxime nam consequuntur.
        </p>

        <button className="modal-btn" onClick={handleCloseModal}>
          Close Modal
        </button>
      </div>
    </>
  );
};

export default memo(MyModal);
