import React from "react";
import "./Navbar.css";

let navbar = document.querySelector(".navbar__container");
console.log(navbar);
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 200) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const Navbar = () => {
  return (
    <div id="myNav">
      <div className="navbar__container"></div>
    </div>
  );
};

export default Navbar;
