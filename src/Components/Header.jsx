import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ChangeTheme from "./ChangeTheme";
import styled from "styled-components";
import Menu from "./Menu";
import {
  primaryColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const MyHeader = styled.header`
  height: 80px;
  position: sticky;
  top: 0px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  background-color: ${(props) =>
    props.theme === "light" ? primaryColor : primaryDarkColor};
`;
const MyNav = styled.nav`
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
`;
const MyTitleContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
`;
const MyTitle = styled.h2`
  font-size: 1.8rem;
  font-family: "Roboto", sans-serif;
  font-style: italic;
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
