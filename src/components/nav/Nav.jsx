import React from "react";
import { useState } from "react";
import "./Nav.css";
import { AiFillHome } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { MdGroupWork } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav id="nav">
      <div className="nav__container">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiFillHome />
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <MdGroupWork />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <RiProjectorFill />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdOutlineContactMail />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
