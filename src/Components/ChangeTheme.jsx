import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styled from "styled-components";
import { secondaryColor, secondaryDarkColor } from "../Colors/colors";

const MyButton = styled.button`
  border: none;
  outline: none;
  height: 2rem;
  width: 2rem;
  margin: auto;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  background: none;
  height: 40px;
  width: 40px;
  text-align: center;
  vertical-align: middle;
  padding-right: 1rem;
  i {
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: ${(props) =>
      props.theme === "light" ? secondaryColor : secondaryDarkColor} !important;
  }
`;

const ChangeTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <MyButton theme={theme}>
      <i
        onClick={handleClick}
        className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}
      ></i>
    </MyButton>
  );
};

export default ChangeTheme;
