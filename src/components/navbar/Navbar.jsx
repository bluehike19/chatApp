import React from "react";
// import { RiMenu3Line, RiCloseLin } from "react-icons";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navar-links">
        <div className="gpt3__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">What is GPT?</a>
          </p>
          <p>
            <a href="#home">Open AI</a>
          </p>
          <p>
            <a href="#home">Case Studies</a>
          </p>
          <p>
            <a href="#home">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
