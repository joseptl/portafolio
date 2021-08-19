import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";

const TopButtom = styled.button`
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  bottom: 80px;
  right: 10px;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background-color: #34495e;
  border: none;
  text-align: center;
  color: #ffffff;
  padding: auto;
  :active {
    border: none;
    outline: none;
    background-color: #34495eaa;
  }
`;

const ToTop = () => {
  const [visibility, setVisibility] = useState(false);
  const { theme } = useContext(ThemeContext);
  const irArriba = (e) => {
    window.scrollTo(0, 0);
  };

  window.onscroll = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };
  return (
    <>
      {visibility && (
        <TopButtom theme={theme} className="toTop" onClick={irArriba}>
          <i className="fas fa-angle-up"></i>
        </TopButtom>
      )}
    </>
  );
};

export default ToTop;
