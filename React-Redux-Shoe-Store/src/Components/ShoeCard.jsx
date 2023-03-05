import React from "react";
import { useNavigate } from "react-router-dom";

//Get the shoe card data from props
const ShoeCard = ({ shoeId }) => {
  const { image, name, category } = shoeId;

  const navigate = useNavigate();

  return (
    <div
      style={{
        cursor: "pointer",
        border: "3px solid black",
        borderRadius: 11,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onClick={() => navigate(`/shoes/${shoeId.id}`)}
    >
      <div>
        <img
          src={image}
          alt=""
          style={{ width: "234px", margin: 11, borderRadius: 7 }}
        />
      </div>
      <div>
        <div
          style={{ fontWeight: "bolder", fontSize: 21, textAlign: "center" }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 21,
            textAlign: "center",
          }}
        >
          {category}
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
