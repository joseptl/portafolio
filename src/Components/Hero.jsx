import React, { useContext} from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import Typewriter from 'typewriter-effect';
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
const MyHeroSubtitle = styled.div`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  padding:0 0.5rem;
  font-style: italic;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`;
const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const subtitles = ["Desarrollador Front-End.","Front-End Developer."]

  return (
    <>
      <MyHeroTitle theme={theme}>José Torín</MyHeroTitle>
      <MyHeroSubtitle theme={theme}>
        <Typewriter options={{
          strings:subtitles,
          autoStart: true,
          delay:100,
          deleteSpeed:50,
        loop: true,
        }}/>
      </MyHeroSubtitle>
    </>
  );
};

export default Hero;
