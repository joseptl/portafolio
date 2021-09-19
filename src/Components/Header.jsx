import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ChangeTheme from "./ChangeTheme";
import styled from "styled-components";
import Menu from "./Menu";
import { device } from "../Breakpoints/breakpoints";
import {
  primaryColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const MyHeader = styled.header`
  height: 60px;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  background-color: ${(props) =>
    props.theme === "light" ? primaryColor : primaryDarkColor};
  @media ${device.laptop} {
    height: 60px;
  }
`;
const MyNav = styled.nav`
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  height: 100%;
`;
const MyTitleContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
`;
const MyTitle = styled.h2`
  font-size: 1.5rem;
  font-family: Raleway, Arial;
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MyHeader theme={theme}>
      <MyTitleContainer theme={theme}>
        <MyTitle theme={theme}>José Torín</MyTitle>
      </MyTitleContainer>
      <MyNav theme={theme}>
        <ChangeTheme />
        <Menu />
      </MyNav>
    </MyHeader>
  );
};

export default Header;
