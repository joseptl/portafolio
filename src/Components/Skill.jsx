import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { parrafo, parrafoDark } from "../Colors/colors";
import { device } from "../Breakpoints/breakpoints";

const MyFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
`;
const MyImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: scale-down;
  @media ${device.tablet} {
    width: 80px;
    height: 80px;
  }
  @media ${device.laptop} {
    width: 90px;
    height: 90px;
  }
`;
const MyFigCaption = styled.figcaption`
  font-size: 1rem;
  color: ${(props) => (props.theme === "light" ? parrafo : parrafoDark)};
  font-family: "Merriweather", serif;
  @media ${device.laptop} {
    font-size: 1.5rem;
    line-height: 5vh;
  }
`;

const Skill = ({ nombre, logo }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MyFigure theme={theme}>
      <MyImg theme={theme} src={logo} alt={`${nombre} logo`} />
      <MyFigCaption theme={theme}>{nombre}</MyFigCaption>
    </MyFigure>
  );
};

export default Skill;
