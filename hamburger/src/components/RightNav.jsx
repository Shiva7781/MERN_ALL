import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Accessibility from "./Accessibility";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  li a {
    color: black;
    font-size: 18px;
    text-decoration: none;
  }

  li a:hover {
    border-bottom: 2px solid #2ecc71;
  }

  li a.active {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #12426a;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <Accessibility />
      </Ul>
    </>
  );
};

export default RightNav;
