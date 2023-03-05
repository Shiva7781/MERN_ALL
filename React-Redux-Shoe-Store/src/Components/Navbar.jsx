import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 3rem",
      }}
    >
      <div>
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: 7,
            padding: "3px",
          }}
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
