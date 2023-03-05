import React from "react";
import ReqAuth from "../Components/ReqAuth";

const SingleShoe = ({ singleShoeData }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Single Shoe Page</h1>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src={singleShoeData.image} alt="" />

        <h5>{singleShoeData.name}</h5>
        <p>{singleShoeData.category}</p>
      </div>
    </div>
  );
};

export default ReqAuth(SingleShoe);
