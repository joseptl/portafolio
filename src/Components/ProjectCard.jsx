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
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme === "light" ? `${secondaryColor}df` : `${primaryDarkColor}df`};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  text-align: justify;
  border-radius: 20px;

  @media ${device.laptop} {
    width: 45%;
  }
`;
const ImageContainer = styled.figure`
  width: 100%;
  img {
    width: 100%;
    object-fit: scale-down;
  }
  @media ${device.laptop} {
  }
`;

const CardTitle = styled.h5`
  font-family: "Roboto", sans-serif;
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};
  font-size: 1.3rem;
  text-align: center;
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`;

const CardP = styled.p`
  font-family: "Merriweather", serif;
  color: ${(props) => (props.theme === "light" ? parrafo : parrafoDark)};
  font-size: 0.8rem;
  text-align: justify;
  padding: 0.5rem 0;
  height: 40%;
  @media ${device.laptop} {
    font-size: 1.3rem;
  }
`;

const CardLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding-top: 1.2rem;
  @media ${device.laptop} {
    width: 50%;
  }
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
    font-size: 1.8rem;
  }
  span {
    font-family: "Merriweather", serif;
    font-size: 0.8rem;
  }
  @media ${device.laptop} {
    i {
      font-size: 2rem;
    }
    span {
      font-size: 1.3rem;
    }
  }
`;

const CardTec = styled.span`
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};
  font-size: 0.8rem;
  font-family: "Merriweather", serif;
  @media ${device.laptop} {
    font-size: 1.3rem;
  }
`;

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
      <CardTitle theme={theme}>{nombre}</CardTitle>
      <CardP theme={theme}>{descripcion}</CardP>
      <ImageContainer>
        <img src={imagen} alt={nombre} />
      </ImageContainer>
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
    </CardContainer>
  );
};

export default ProjectCard;
