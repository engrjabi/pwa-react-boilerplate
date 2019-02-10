import logo from "@images/logo.svg";
import React from "react";
import "./style.css";

const ReactWaterMark: React.FC<{}> = () => {
  return (
    <header className="water-mark-header">
      <img src={logo} className="water-mark-header__logo" alt="logo" />
      <p>
        See <code>src/containers/ReactWaterMark/ReactWaterMark.tsx</code>
      </p>
      <a
        className="water-mark-header__link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default ReactWaterMark;
