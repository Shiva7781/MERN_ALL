import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "./logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 3px solid #f1f1f1;
  padding: 0 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: start;
  }
`;

const Img = styled.img`
  width: 333px;
  height: 77px;

  @media (max-width: 768px) {
    /* display: none; */

    width: 55px;
    height: 55px;
    margin: 1rem;
  }
`;

const Input = styled.input`
  font-size: 16px;
  outline: none;
  min-width: 40%;
  padding: 11px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Img src={logo} />
      <Input placeholder="Search for products, brand and more" />
      <Burger />
    </Nav>
  );
};

export default Navbar;
