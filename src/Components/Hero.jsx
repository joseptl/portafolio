import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import {
  background,
  backgroundDark,
  primaryColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const MyHero = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) =>
    props.theme === "light"
      ? `linear-gradient( 145deg, ${background}, #bbb)`
      : `linear-gradient( 145deg, ${backgroundDark}, #000)`};
`;

const MyHeroTitle = styled.h1`
  font-size: 3.5rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 5rem;
  }
`;
const MyHeroSubtitle = styled.span`
  font-size: 1.5rem;
  font-family: "Merriweather", serif;
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
    <MyHero theme={theme}>
      <MyHeroTitle theme={theme}>José Torín</MyHeroTitle>
      <MyHeroSubtitle theme={theme}>
        {"<"}Front-End Developer{"/>"}
      </MyHeroSubtitle>
    </MyHero>
  );
};

export default Hero;
