import React from "react";
import HOC from "./HOC";

const Acomp = ({ count, increment, name }) => {
  return (
    <div>
      <button onClick={increment}>
        {name} {count} onClick
      </button>
    </div>
  );
};

export default HOC(Acomp, 2);
