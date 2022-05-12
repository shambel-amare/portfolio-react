import React from "react";
import CTA from "../shared/CTA";
import "./Header.css";
import HomeImage from "../../assets/home-avatar-bg.svg";
import Resume from "../../assets/resume.pdf";
import Socials from "../shared/Socials";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="wrapper">
          <div className="img__container">
            <img src={HomeImage} alt="" />
          </div>
          <Socials />

          <div className="header__container">
            <h5>Hello, I'm</h5>
            <div className="name">
              <h1>Shambel</h1>
              <h2>Amare</h2>
            </div>

            <div className="title-container">
              <div className="title">
                <a href="#">Fullstack</a>
                <a href="#">Developer</a>
              </div>
              <div className="title">
                <a href="#">UI/UX</a>
                <a href="#"> Designer</a>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default Header;
