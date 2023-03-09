import React from "react";
import styled from "styled-components";
import EcommerceLogoImg from "./logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 235px;

  /* border: 1px solid red; */

  img {
    width: 235px;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={EcommerceLogoImg} alt="Ecommerce logo" />
      </LogoImg>
      <LogoText>Ecommerce</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
