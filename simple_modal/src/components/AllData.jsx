import React, { memo, useState } from "react";
import MyModal from "./MyModal";

const AllData = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {showModal && <MyModal handleCloseModal={handleCloseModal} />}

      <button className="modal-btn" onClick={handleOpenModal}>
        Open Modal
      </button>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>

      <br />
      <br />
      <br />
    </>
  );
};

export default memo(AllData);
