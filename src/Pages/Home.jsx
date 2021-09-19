import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import fondo from "../Images/react-wallpaper.jpg"
import styled from "styled-components";
import {
  background,
  backgroundDark,
} from "../Colors/colors";
import Hero from "../Components/Hero";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "light" ? background : backgroundDark};
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Container id="Hero" theme={theme}>
      <Hero />
    </Container>
  );
};

export default Home;
