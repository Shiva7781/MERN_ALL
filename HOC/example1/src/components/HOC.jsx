import React, { useState } from "react";

const HOC = (OriginalComp, num) => {
  const NewComp = (props) => {
    // props :- See App.js

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prev) => prev + num);
    };

    return <OriginalComp {...props} count={count} increment={increment} />;
  };

  return NewComp;
};
export default HOC;
