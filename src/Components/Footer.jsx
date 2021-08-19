import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { device } from "../Breakpoints/breakpoints";
import {
  primaryColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const MyFooter = styled.footer`
  height: 30vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 20px;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? secondaryColor : primaryDarkColor};
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};

  @media ${device.laptop} {
    justify-content: space-between;
    padding: 40px 180px;
    flex-direction: row;
  }
`;

const MySNContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding-top: 25px;
`;

const MySN = styled.div`
  padding-bottom: 10px;
  padding-right: 10px;
  a {
    text-decoration: none;
    font-family: "Merriweather", serif;
    color: ${(props) =>
      props.theme === "light" ? primaryColor : secondaryDarkColor};
    :visited {
      color: ${(props) =>
        props.theme === "light" ? primaryColor : secondaryDarkColor};
    }
    i {
      padding-right: 5px;
    }
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
    :hover {
      position: relative;
      bottom: 5px;
    }
  }
`;

const MyContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyContactTitle = styled.span`
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

const MyContact = styled.div`
  display: flex;
  padding-top: 1rem;
  font-size: 1rem;
  align-items: center;
  color: ${(props) =>
    props.theme === "light" ? primaryColor : secondaryDarkColor};
  div {
    height: 35px;
    width: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    border: thin solid
      ${(props) =>
        props.theme === "light" ? primaryColor : secondaryDarkColor};
    border-radius: 100%;
    i {
    }
  }
  span {
    padding-left: 5px;
    font-family: "Merriweather", serif;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
    div {
    }
  }
`;

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MyFooter id="Contact" theme={theme}>
      <MyContactInfo>
        <MyContactTitle theme={theme}>Información de Contacto</MyContactTitle>
        <MyContact theme={theme}>
          <div>
            <i className="fas fa-envelope"></i>
          </div>
          <span>Joseptl551@gmail.com</span>
        </MyContact>
        <MyContact theme={theme}>
          <div>
            <i className="fas fa-phone"></i>
          </div>
          <span>+58 412-0523198</span>
        </MyContact>
      </MyContactInfo>
      <MySNContainer>
        <MySN theme={theme}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.freecodecamp.org/espanol/joseptl"
          >
            <i className="fab fa-free-code-camp"></i>
            <span>FCC</span>
          </a>
        </MySN>
        <MySN theme={theme}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jose-pastor-torin-lucena-b24231207"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </MySN>
        <MySN theme={theme}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/jptlDev?s=08"
          >
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </MySN>
      </MySNContainer>
    </MyFooter>
  );
};

export default Footer;
