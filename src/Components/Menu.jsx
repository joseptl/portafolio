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
    padding-top: 50px;
    top: 60px;
    left: 0px;
    z-index: ${(props) => (props.open ? 2000 : 0)};
    background-color: ${(props) =>
      props.theme === "light" ? primaryColor : primaryDarkColor};
    height: 100%;
    align-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    transition: opacity 0.5s ease-in, visibility 0.5s ease-in;
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
  padding-bottom: 4rem;
  vertical-align: middle;
  font-family: "Roboto", sans-serif;
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
    font-family: "Roboto", sans-serif;

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
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
    position: relative;
    z-index: 9;
    border: none;
    background-color: transparent;
    cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
  span{
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    opacity: ${props=>props.open? 0 : 1};
    top: 50%;
    background-color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
    transform: translate(0, -50%);
    transition: opacity 0.3s 0.3s;
    
  }
  ::before,
  ::after{
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
    transition: ${props=>props.open?"top 0.3s, bottom 0.3s, transform 0.3s 0.3s":"transform 0.3s, top 0.3s 0.3s, bottom 0.3s 0.3s"};
  }

  ::before{
    top: ${props=>props.open?`calc(50% - 1px)`:`6px`};
    transform: ${props=>props.open?`rotate(45deg)`:"none"};
  }

  ::after{
    bottom: ${props=>props.open?`calc(50% - 1px)`:`6px`};
    transform: ${props=>props.open?`rotate(-45deg)`:"none"};
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
        <span></span>
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
          <a onClick={handleClose} href="#Certificates">
            Certificados
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
