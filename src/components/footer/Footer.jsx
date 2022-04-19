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
                <h4>shambelamare2006@gmail.com</h4>
                <h4>Whatsapp</h4>
              </div>
            </div>
            <div className="list">
              <h2>Socials</h2>
              <div className="items">
                <h4>Email</h4>
                <h4>github</h4>
                <h4>Whatsapp</h4>
                <h4>Linkedin</h4>
              </div>
            </div>
          </div>
          <div className="copy-right">
            Copy Right <AiOutlineCopyrightCircle />
            <h2>Shambel</h2>
            <h2>Amare</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
