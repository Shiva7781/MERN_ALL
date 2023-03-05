import React from "react";
import HOC from "./HOC";

const Bcomp = ({ count, increment, name }) => {
  return (
    <div>
      <button onMouseOver={increment}>
        {name} {count} onMouseOver
      </button>
    </div>
  );
};

export default HOC(Bcomp, 5);
