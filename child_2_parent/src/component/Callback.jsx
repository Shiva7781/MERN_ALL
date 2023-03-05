import React from "react";
// import { useState } from "react";

// child (CB component)
const Callback = ({ getcolor }) => {
    // const [activecolor, setActivecolor] = useState();           // Optional line

    const handleChange = (e) => {
        // setActivecolor(e.target.value);         // Optional line
        getcolor(e.target.value);
    };
    return (
        <>
            {/* <input type="text" id="input" onChange={handleChange} value={activecolor} /> */}
            <input type="text" id="input" onChange={handleChange} />
        </>
    );
};

export default Callback;
