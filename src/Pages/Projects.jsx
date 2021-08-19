import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ProjectCard from "../Components/ProjectCard";
import styled from "styled-components";
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
  padding: 80px 0 80px 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? background : backgroundDark};
`;

const ProjectTitle = styled.h2`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  padding: 2rem;
  padding-bottom: 1rem;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const CardsContainer = styled.div`
  @media ${device.laptop} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MySection id="Projects" theme={theme}>
      <ProjectTitle theme={theme}>Proyectos</ProjectTitle>
      <CardsContainer>
        {projectsList.map((project, id) => (
          <ProjectCard
            nombre={project.nombre}
            descripcion={project.descripcion}
            tecnologias={project.tecnologias}
            repositorio={project.repositorio}
            link={project.link}
            imagen={project.imagen}
          />
        ))}
      </CardsContainer>
    </MySection>
  );
};

export default Projects;
