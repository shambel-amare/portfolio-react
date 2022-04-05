import React from "react";
import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-list">
            <div className="list">
              <h2>Home</h2>
            </div>
            <div className="list">
              <h2>About</h2>
            </div>

            <div className="list">
              <h2>Services</h2>
              <div className="items">
                <h4>Fullstack</h4>
                <h4>Backend</h4>
                <h4>Frontend</h4>
                <h4>Design</h4>
              </div>
            </div>
            <div className="list">
              <h2>Contact</h2>
              <div className="items">
                <h4>Email</h4>
                <h5>shambelamare2006@gmail.com</h5>
                <h4>Whatsapp</h4>
              </div>
            </div>
            <div className="list">
              <h2>Socials</h2>
              <div className="items">
                <h4>Email</h4>
                <h5>github</h5>
                <h4>Whatsapp</h4>
                <h4>Linkedin</h4>
              </div>
            </div>
          </div>
          <div className="copy-right">
            Copy Right <AiOutlineCopyrightCircle />
            Shambel Amare
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
