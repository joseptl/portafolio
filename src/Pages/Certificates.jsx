import React, { useContext, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { device } from "../Breakpoints/breakpoints";
import { useObserve } from "../Hooks/useObserve";
import styled from "styled-components";
import Carrusel from "../Components/Carrusel";
import frontend from "../Images/certificates/frontend.jpg";
import basico from "../Images/certificates/basicoJs.jpg";
import ecma from "../Images/certificates/ECMA.jpg";
import diseno from "../Images/certificates/disenoP.jpg";
import clousures from "../Images/certificates/scopeJS.jpg";
import r2019 from "../Images/certificates/reactJS.jpg";
import gestionNPM from "../Images/certificates/gestionNPM.jpg";
import profesional from "../Images/certificates/profesionalJs.jpg";
import asinc from "../Images/certificates/asincronismoJs.jpg";
import {
  background,
  backgroundDark,
  secondaryColor,
  secondaryDarkColor,
} from "../Colors/colors";

const data = [
  {
    titulo: "Frontend Developer",
    credencial:
      "https://platzi.com/p/jptl/curso/1640-frontend-developer/diploma/detalle/",
    imagen: frontend,
  },
  {
    titulo: "Básico de JavaScript",
    credencial:
      "https://platzi.com/p/jptl/curso/1814-basico-javascript/diploma/detalle/",
    imagen: basico,
  },
  {
    titulo: "ECMAScript 6+",
    credencial:
      "https://platzi.com/p/jptl/curso/1815-ecmascript-6/diploma/detalle/",
    imagen: ecma,
  },
  {
    titulo: "Diseño para Programadores",
    credencial:
      "https://platzi.com/p/jptl/curso/1906-diseno-programadores/diploma/detalle/",
    imagen: diseno,
  },
  {
    titulo: "Closures y Scope en JavaScript",
    credencial: "https://platzi.com/p/jptl/curso/1807-scope/diploma/detalle/",
    imagen: clousures,
  },
  {
    titulo: "React.js 2019",
    credencial:
      "http://platzi.com/p/jptl/curso/1548-react-2019/diploma/detalle/",
    imagen: r2019,
  },
  {
    titulo: "Gestion de Dependencias y Paquetes con NPM",
    credencial: "https://platzi.com/p/jptl/curso/1763-npm/diploma/detalle/",
    imagen: gestionNPM,
  },
  {
    titulo: "Asincronismo con Javascript",
    credencial:
      "https://platzi.com/p/jptl/curso/1789-asincronismo-js/diploma/detalle/",
    imagen: asinc,
  },
  {
    titulo: "Profesional de Javascript",
    credencial:
      "http://platzi.com/p/jptl/curso/1642-javascript-profesional/diploma/detalle/",
    imagen: profesional,
  },
];

const MySection = styled.section`
  width: 100vw;
  justify-content: center;
  overflow: hidden;
  background-color: ${(props) =>
    props.theme === "light" ? background : backgroundDark};
    @media ${device.laptop}{
      min-height: 100vh;
    }
`;

const CarruselContainer = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms ease-in-out;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  padding-top: 2rem;
  @media ${device.laptop}{
    min-height: 100vh;
  }
`;

const CertificateTitle = styled.h2`
  text-align: center;
  font-family: Raleway, Arial;
  margin: 0;
  font-size: 2rem;
  padding: 2rem;
  color: ${(props) =>
    props.theme === "light" ? secondaryColor : secondaryDarkColor};
  @media ${device.laptop} {
    font-size: 3rem;
    padding: 2rem;
  }
`;

const Certificates = () => {
  const MyCertificatesRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const visible = useObserve(MyCertificatesRef);
  return (
    <MySection ref={MyCertificatesRef} id="Certificates" theme={theme}>
      <CarruselContainer visible={visible}>
        <CertificateTitle theme={theme}>Certificados</CertificateTitle>
        <Carrusel data={data} />
      </CarruselContainer>
    </MySection>
  );
};

export default Certificates;
