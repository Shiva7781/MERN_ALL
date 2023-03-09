import React, { useState } from "react";
import styled from "styled-components";
import Accessibility from "./Accessibility";
import MenuToggle from "./MenuToggle";
import { NavLink } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #ae6767;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const Li = styled.li`
  width: 100%;
  margin: 1rem 0;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;

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

const Marginer = styled.div`
  height: 2em;
`;

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
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
          <Marginer />
          <Accessibility />
        </Ul>
      )}
    </NavLinksContainer>
  );
};

export default MobileNavLinks;
