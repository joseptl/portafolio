import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import {
  primaryColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const MyMenu = styled.div`
  @media ${device.mobileS} {
    display: none;
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    position: fixed;
    width: 100vw;
    padding: auto;
    overflow-y: auto;
    padding-top: 20px;
    top: 80px;
    left: 0px;
    z-index: ${(props) => (props.open ? 2 : 0)};
    background-color: ${(props) =>
      props.theme === "light" ? primaryColor : primaryDarkColor};
    height: 100%;
    align-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    transition: opacity 0.5s ease-in;
  }

  @media ${device.laptop} {
    z-index: 0;
    transition: none;
    display: flex;
    transition: none;
    visibility: visible;
    position: relative;
    top: 0;
    width: fit-content;
    opacity: 1;
    font-size: 1rem;
    padding: 0;
    flex-direction: row;
    display: flex;
    background: none;
  }
`;
const MyMenuItem = styled.div`
  cursor: pointer;
  padding: auto;
  padding-bottom: 5rem;
  vertical-align: middle;
  font-family: "Merriweather", serif;
  font-weight: lighter;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor} !important;
  a {
    text-decoration: none;
    color: ${(props) =>
      props.theme === "light" ? secondaryColor : secondaryDarkColor} !important;
    :visited {
      color: ${(props) =>
        props.theme === "light"
          ? secondaryColor
          : secondaryDarkColor} !important;
    }
  }

  @media ${device.laptop} {
    padding: 0;
    padding: auto;
    vertical-align: middle;
    padding-right: 1rem;
    font-family: "Merriweather", serif;
    font-weight: lighter;

    :hover {
      a {
        position: relative;
        bottom: 2px;
        border-bottom: thin solid
          ${(props) =>
            props.theme === "light"
              ? secondaryColor
              : secondaryDarkColor} !important;
      }
    }
  }
`;
const MyMenuButton = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  padding: auto;
  padding-right: 0;
  display: flex;
  align-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  vertical-align: center;
  @media ${device.laptop} {
    display: none;
  }
`;

const MyMenuContainer = styled.div`
  padding-right: 0.5rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
  @media ${device.laptop} {
    padding-right: 1rem;
  }
`;

const Menu = () => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(
    (e) => {
      open
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "auto");
    },
    [open]
  );
  return (
    <MyMenuContainer>
      <MyMenuButton theme={theme} open={open} onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </MyMenuButton>
      <MyMenu open={open} theme={theme}>
        <MyMenuItem theme={theme}>
          <a href="#Hero" onClick={handleClose}>
            Inicio
          </a>
        </MyMenuItem>
        <MyMenuItem theme={theme}>
          <a onClick={handleClose} href="#About">
            Sobre Mí
          </a>
        </MyMenuItem>
        <MyMenuItem theme={theme}>
          <a onClick={handleClose} href="#Skills">
            Habilidades
          </a>
        </MyMenuItem>
        <MyMenuItem theme={theme}>
          <a onClick={handleClose} href="#Projects">
            Proyectos
          </a>
        </MyMenuItem>
        <MyMenuItem theme={theme}>
          <a onClick={handleClose} href="#Contact">
            Contacto
          </a>
        </MyMenuItem>
      </MyMenu>
    </MyMenuContainer>
  );
};

export default Menu;
