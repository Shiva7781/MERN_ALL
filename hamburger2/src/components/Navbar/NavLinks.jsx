import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const Li = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  a:hover {
    border-bottom: 2px solid #2ecc71;
  }

  a.active {
    font-weight: bold;
    /* border-bottom: 2px solid #2ecc71; */
  }
`;

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <Ul>
        <Li>
          <NavLink to="/">How it works</NavLink>
        </Li>
        <Li>
          <NavLink to="/about">About us</NavLink>
        </Li>
        <Li>
          <NavLink to="/expl">Explore</NavLink>
        </Li>
        <Li>
          <NavLink to="/imp">Impact</NavLink>
        </Li>
      </Ul>
    </NavLinksContainer>
  );
};

export default NavLinks;
