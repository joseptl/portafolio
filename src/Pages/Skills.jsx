import React, { useContext, useRef } from "react";
import Skill from "../Components/Skill";
import reactLogo from "../Images/skills/react.png";
import html5Logo from "../Images/skills/html5.png";
import jsLogo from "../Images/skills/javascript.png";
import cssLogo from "../Images/skills/css.png";
import sassLogo from "../Images/skills/sass.png";
import npmLogo from "../Images/skills/npm.png";
import yarnLogo from "../Images/skills/yarn.png";
import gitLogo from "../Images/skills/git.png";
import { ThemeContext } from "../Context/ThemeContext";
import { useObserve } from "../Hooks/useObserve";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import {
  background,
  backgroundDark,
  parrafo,
  parrafoDark,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";
const tecnologias = [
  {
    nombre: "JavaScript",
    logo: jsLogo,
  },
  {
    nombre: "Html5",
    logo: html5Logo,
  },
  {
    nombre: "Css",
    logo: cssLogo,
  },
  {
    nombre: "React",
    logo: reactLogo,
  },
  {
    nombre: "Sass",
    logo: sassLogo,
  },
];

const herramientas = [
  {
    nombre: "Npm",
    logo: npmLogo,
  },
  {
    nombre: "Yarn",
    logo: yarnLogo,
  },
  {
    nombre: "Git",
    logo: gitLogo,
  },
];

const MySection = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? background : backgroundDark};
`;
const SkillsTitle = styled.h2`
  text-align: center;
  font-family: Raleway, Arial;
  font-size: 2rem;
  padding: 2rem;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;
const SkillsListContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 95%;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  @media ${device.tablet} {
    width: 100%;
    justify-content: space-evenly;
  }
`;
const SkillsContainer = styled.div`
  width: 95%;
  margin: auto;
  overflow: hidden;

  transition: all 1000ms ease-in-out;
  z-index: 1;
  position: relative;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  left: ${(props) => (props.visible ? "0px" : "100%")};

  @media ${device.tablet} {
    width: 60%;
  }
`;
const MySubtitle = styled.h5`
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) => (props.theme === "light" ? parrafo : parrafoDark)};
  text-align: center;
  padding: 0 0 1.5rem 0;
  margin: auto;
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`;

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const SkillsRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "-100px",
    treshhold: 1,
  };

  const visible = useObserve(SkillsRef, options);

  return (
    <MySection ref={SkillsRef} id="Skills" theme={theme}>
      <SkillsContainer visible={visible}>
        <SkillsTitle theme={theme}>Habilidades</SkillsTitle>
        <MySubtitle theme={theme}>Tecnologías</MySubtitle>
        <SkillsListContainer>
          {tecnologias.map((skill, id) => (
            <Skill key={id} nombre={skill.nombre} logo={skill.logo} />
          ))}
        </SkillsListContainer>
        <MySubtitle theme={theme}>Herramientas</MySubtitle>
        <SkillsListContainer>
          {herramientas.map((skill, id) => (
            <Skill key={id} nombre={skill.nombre} logo={skill.logo} />
          ))}
        </SkillsListContainer>
      </SkillsContainer>
    </MySection>
  );
};

export default Skills;
