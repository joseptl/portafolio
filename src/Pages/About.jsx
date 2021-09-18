import React, { useContext, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import computador from "../Images/developer.png";
import { device } from "../Breakpoints/breakpoints";
import { useObserve } from "../Hooks/useObserve";
import {
  background,
  backgroundDark,
  parrafo,
  parrafoDark,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? background : backgroundDark};
`;
const AboutTitle = styled.h2`
  text-align: center;
  font-family: Raleway, Arial;
  font-size: 2rem;
  padding-top: 2rem;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 3rem;
  }
  `;

const AboutText = styled.p`
  text-align: justify;
  line-height: 35px;
  padding: 2rem;
  font-size: 1rem;
  text-indent: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  color: ${(props) => (props.theme === "light" ? parrafo : parrafoDark)};
  @media ${device.laptop} {
    font-size: 1.5rem;
    line-height: 5vh;
  }
`;

const AboutContainer = styled.div`
  width: 95%;
  margin: auto;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms ease-in-out;
  @media ${device.tablet} {
    width: 60%;
    margin: auto;
    //box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);;;;;;;;;;;;;;;
  }
`;

const MyFigure = styled.figure`
  display: none;
  @media ${device.tablet} {
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: opacity 1000ms ease-in-out;

    width: 30%;
    display: flex;
    margin: auto;
    justify-content: center;
    img {
      width: 80%;
      object-fit: scale-down;
    }
  }
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  const AboutRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "-100px",
    treshhold: 1,
  };

  const visible = useObserve(AboutRef, options);

  return (
    <Container ref={AboutRef} theme={theme} id="About">
      <MyFigure visible={visible}>
        <img src={computador} alt="computador" />
      </MyFigure>
      <AboutContainer visible={visible}>
        <AboutTitle theme={theme}>Sobre Mí</AboutTitle>
        <AboutText theme={theme}>
          Soy un <b>Front-End Developer</b> especializado en React para la
          creación de Single Page Applications, con interés en aprender nuevas
          tecnologías. Me encuentro cursando 4to semestre de Ingenieria
          Informática y me he instruido en el desarrollo web en plataformas como{" "}
          <b>FreeCodeCamp</b> y <b>Platzi</b>.
        </AboutText>
      </AboutContainer>
    </Container>
  );
};

export default About;
