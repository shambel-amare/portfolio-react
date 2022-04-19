import React from "react";
import "./Navbar.css";

const Navbar = () => {
  window.addEventListener("scroll", function (e) {
    var navbar = document.querySelector(".navbar__container");
    var logo = document.querySelector(".logo");

    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > window.innerHeight
    ) {
      navbar.classList.add("scrolled");
      logo.classList.add("scrolled");
      // tags.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      logo.classList.remove("scrolled");
      // tags.classList.add("scrolled");
    }
  });
  return (
    <nav id="myNav">
      <div className="navbar__container">
        <div className="logo"></div>
        <div className="header-tags">
          <a href="#about">About</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
