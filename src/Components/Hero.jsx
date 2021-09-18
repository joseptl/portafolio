import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import {
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";



const MyHeroTitle = styled.h1`
  font-size: 3.5rem;
  font-family: Raleway, Arial;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 5rem;
  }
`;
const MyHeroSubtitle = styled.span`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`;
const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <MyHeroTitle theme={theme}>José Torín</MyHeroTitle>
      <MyHeroSubtitle theme={theme}>
        {"<"}Front-End Developer{"/>"}
      </MyHeroSubtitle>
    </>
  );
};

export default Hero;
