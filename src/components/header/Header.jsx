import React from "react";
import Button from "../shared/Button";
import CTA from "../shared/CTA";
import "./Header.css";
import HomeImage from "../../assets/HomeImage.svg";
import Resume from "../../assets/resume.pdf";
import Socials from "../shared/Socials";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="wrapper">
          <Socials />
          <div className="header__container">
            <h5>Hello, I'm</h5>
            <div className="name">
              <h1>Shambel</h1>
              <h2>Amare</h2>
            </div>
            <div className="title">
              <a href="#">Fullstack </a>
              <a href="#">Developer / </a>
              <a href="#">Designer</a>
            </div>
            <div className="buttons">
              <CTA
                className="btn"
                downloadable
                link={Resume}
                text="Download CV"
              />
              <CTA
                className="btn btn-secondary"
                link="#contact"
                text="Get In touch"
              />
            </div>
          </div>
          <div className="img__container">
            <img src={HomeImage} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
