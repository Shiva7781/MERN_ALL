import React from "react";
import { useState, useRef } from "react";

const Uncontrolled = () => {
  const luckyname = useRef(null);
  const [show, setShow] = useState(false);

  const submitData = (e) => {
    e.preventDefault();
    const Name = luckyname.current.value;

    Name ? setShow(true) : alert("Please fill your lucky name");
  };

  return (
    <>
      <form action="" onSubmit={submitData}>
        <div>
          <label htmlFor="luckyname">Enter Your Name</label>
          <input type="text" id="luckyname" ref={luckyname} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <p className="showDataStyle">{show ? `Your lucky name is ${luckyname.current.value}` : null}</p>
    </>
  );
};

export default Uncontrolled;
