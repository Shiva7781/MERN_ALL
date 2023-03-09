import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h3>Logo</h3>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
