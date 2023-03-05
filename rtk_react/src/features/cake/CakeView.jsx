import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

const CakeView = () => {
  const [value, setValue] = useState(1);

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Number of cakes - {numOfCakes}</h3>
      <button onClick={() => dispatch(ordered())}>Order cake </button>{" "}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock cakes </button>
    </div>
  );
};

export default CakeView;
