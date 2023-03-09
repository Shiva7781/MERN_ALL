import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "./logo.png";

const Nav = styled.nav`
  height: 55px;
  border-bottom: 3px solid #f1f1f1;
  padding: 0 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 333px;
  /* border: 1px solid red; */
`;

const Navbar = () => {
  return (
    <Nav>
      <Img src={logo} />

      <Burger />
    </Nav>
  );
};

export default Navbar;
