import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import {
  parrafo,
  parrafoDark,
  primaryColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const CardContainer = styled.div`
  width: 80%;
  height: fit-content;
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  z-index:1;
  transition: all 500ms ease-in;

  :hover > div{
    display: flex;
    visibility: visible;
    opacity: 1;
  }

  img {
    width: 100%;
    object-fit: scale-down;
  }

  @media ${device.laptop} {
    width: 45%;
  }
`;

const CardTitle = styled.h5`
  font-family: Raleway, Arial;
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};
  font-size: 1rem;
  text-align: center;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const CardLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding-top: 1.2rem;
`;

const CardLink = styled.a`
  color: ${(props) => (props.theme === "light" ? parrafo : parrafoDark)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  :visited {
    color: ${(props) => (props.theme === "light" ? parrafo : parrafoDark)};
  }
  i {
    font-size: 1.5rem;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.6rem;
  }
  @media ${device.tablet} {
    i {
      font-size: 1.8rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;

const CardTec = styled.span`
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};
  font-size: 1rem;
  font-family: Raleway, Arial;
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

const DataContainer = styled.div`
position: absolute;
display: flex;
visibility: hidden;
opacity: 0;
flex-direction: column;
justify-content: center;
transition: all 500ms ease-in;
align-items: center;
background-color: ${(props) =>
    props.theme === "light" ? `${secondaryColor}dd` : `${primaryDarkColor}dd`};
width: 100%;
height: 100%;
z-index:2;
`

const ProjectCard = ({
  nombre,
  descripcion,
  tecnologias,
  repositorio,
  link,
  imagen,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CardContainer theme={theme}>
        <img src={imagen} alt={nombre} />
      <DataContainer theme={theme}>
        <CardTitle theme={theme}>{nombre}</CardTitle>
        <CardTec theme={theme}>{tecnologias}</CardTec>
        <CardLinksContainer theme={theme}>
          <CardLink
            href={repositorio}
            target="_blank"
            rel="noreferrer"
            theme={theme}
            >
            <i className="fab fa-github"></i>
            <span>Repositorio</span>
          </CardLink>
          <CardLink href={link} target="_blank" rel="noreferrer" theme={theme}>
            <i className="fas fa-desktop"></i>
            <span>Link</span>
          </CardLink>
        </CardLinksContainer>
      </DataContainer>
    </CardContainer>
  );
};

export default ProjectCard;
