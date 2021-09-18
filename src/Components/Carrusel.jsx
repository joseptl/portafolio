import React, { useState, useContext } from "react";
import { device } from "../Breakpoints/breakpoints";
import styled from "styled-components";
import {
  secondaryColor,
  secondaryDarkColor,
  primaryColor,
  primaryDarkColor,
} from "../Colors/colors";
import { ThemeContext } from "../Context/ThemeContext";

const MyCarrusel = styled.div`
  width: 95vw;
  max-width: 720px;
  height: 50%;
  max-height: 560px;
  overflow: hidden;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const MyCarruselItem = styled.div`
  width: 95vw;
  max-width: 720px;
  height: fit-content;
  position: ${(props) =>
    parseInt(props.position) === props.itemFocus ? "relative" : "absolute"};
  z-index: 1;
  visibility: ${(props) =>
    parseInt(props.position) === props.itemFocus ? "visible" : "hidden"};
  opacity: ${(props) => (parseInt(props.position) === props.itemFocus ? 1 : 0)};
  perspective: 1000px;
  transition: all 1000ms ease-in;
  figure {
    transition: all 1000ms ease-in;
    width: 95vw;
    max-width: 720px;
    img {
      width: 95vw;
      max-width: 720px;
      object-fit: scale-down;
    }
  }
  :hover figure {
    transition: all 600ms ease-in;
    opacity: 0.8;
  }
  :hover div {
    transition: all 600ms ease-in;
    visibility: visible;
    opacity: 1;
  }
`;

const MyArrowR = styled.button`
  border: none;
  background: none;
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 3;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 1.2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: #0003;
  }
  :active {
    background: #0004;
  }
  i {
    padding: auto;
  }
`;

const MyArrowL = styled.button`
  border: none;
  background: none;
  height: 30px;
  z-index: 3;
  width: 30px;
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 1.2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: #0003;
  }
  :active {
    background: #0004;
  }
  i {
    padding: auto;
  }
`;

const MyCredential = styled.div`
  transition: all 500ms ease-in;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  height: 20%;
  width: 30%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme === "light" ? `${primaryColor}dd` : `${primaryDarkColor}dd`};

  a {
    transition: all 500ms ease-in;
    font-family: Raleway, Arial;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    color: ${(props) =>
      props.theme === "light" ? secondaryColor : secondaryDarkColor};
    :visited {
      color: ${(props) =>
        props.theme === "light" ? secondaryColor : secondaryDarkColor};
    }
  }
  @media ${device.tablet} {
    a {
      font-size: 1.5rem;
    }
  }
`;

const Carrusel = ({ data }) => {
  const [itemFocus, setItemFocus] = useState(0);
  const { theme } = useContext(ThemeContext);

  const handleRight = () => {
    if (itemFocus < data.length - 1) {
      setItemFocus(itemFocus + 1);
    }
  };

  const handleLeft = () => {
    if (itemFocus > 0) {
      setItemFocus(itemFocus - 1);
    }
  };

  return (
    <MyCarrusel>
      <MyArrowL onClick={handleLeft}>
        <i className="fas fa-angle-left"></i>
      </MyArrowL>
      <MyArrowR onClick={handleRight}>
        <i className="fas fa-angle-right"></i>
      </MyArrowR>
      {data.map((e, id) => (
        <MyCarruselItem itemFocus={itemFocus} key={id} position={id}>
          <figure>
            <img src={e.imagen} alt={e.titulo} />
          </figure>
          <MyCredential theme={theme}>
            <a target="_blank" rel="noreferrer" href={e.credencial}>
              Ver Credencial
            </a>
          </MyCredential>
        </MyCarruselItem>
      ))}
    </MyCarrusel>
  );
};

export default Carrusel;
