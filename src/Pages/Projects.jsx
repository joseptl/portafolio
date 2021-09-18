import React, { useContext, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import ProjectCard from "../Components/ProjectCard";
import { device } from "../Breakpoints/breakpoints";
import pokedexImage from "../Images/pages/pokedex.jpg";
import rickAndMortyImage from "../Images/pages/rickAndMorty.jpg";
import portafolioImage from "../Images/pages/portafolio.jpg";
import {
  background,
  backgroundDark,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";
import { useObserve } from "../Hooks/useObserve";

const projectsList = [
  {
    nombre: "Buscador de Personajes de Rick y Morty",
    descripcion: ` Mi primer proyecto con Javascript, permitme buscas personajes de la serie Rick y Morty según su nombre, estatus y género. Fue creada para practicar aprender a usar las peticionas asincronas a una API mediante fetch.`,
    tecnologias: "Javascript, Html, Css",
    link: "https://joseptl.github.io/RickyMorty/",
    repositorio: "https://github.com/joseptl/RickyMorty",
    imagen: rickAndMortyImage,
  },
  {
    nombre: "Pokédex",
    descripcion: `  Pokédex realizada para continuar practicando peticiones a una API mediante Fetch. Esta
    permite buscar pokémons según su generación y filtrarlos por su tipo y por su nombre, así como obtener mas detalles sobre un pokémon al hacer click sobre él.
    `,
    tecnologias: "React, Sass, Bootstrap, React-Bootstrap",
    link: "https://pokedex-joseptl.vercel.app/",
    repositorio: "https://github.com/joseptl/Pokedex",
    imagen: pokedexImage,
  },
  {
    nombre: "Portafolio",
    descripcion: ` Portafolio personal creado en React y con Styled-components para probar su funcionamiento. Y diseñado para dar a conocer mis conocimientos en desarrolo web y projectos realizados.`,
    tecnologias: "React, Context, Styled-Components",
    link: "",
    repositorio: "https://github.com/joseptl/portafolio",
    imagen: portafolioImage,
  },
];

const MySection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? background : backgroundDark};
`;

const ProjectTitle = styled.h2`
  text-align: center;
  font-family: Raleway, Arial;
  position: relative;
  font-size: 2rem;
  padding: 2rem;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  transition: all 1000ms ease-in-out;
  z-index: 1;
  position: relative;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  right: ${(props) => (props.visible ? "0px" : "100%")};

  @media ${device.tablet} {
    width: 95%;
  }
`;

const Projects = () => {
  const options = {
    root: null,
    rootMargin: "-100px",
    treshhold: 1,
  };
  const ProjectsRef = useRef(null);
  const visible = useObserve(ProjectsRef, options);
  const { theme } = useContext(ThemeContext);
  return (
    <MySection ref={ProjectsRef} id="Projects" theme={theme}>
      <ProjectContainer visible={visible}>
        <ProjectTitle theme={theme}>Proyectos</ProjectTitle>
        <CardsContainer>
          {projectsList.map((project, id) => (
            <ProjectCard
              key={id}
              nombre={project.nombre}
              descripcion={project.descripcion}
              tecnologias={project.tecnologias}
              repositorio={project.repositorio}
              link={project.link}
              imagen={project.imagen}
            />
          ))}
        </CardsContainer>
      </ProjectContainer>
    </MySection>
  );
};

export default Projects;
