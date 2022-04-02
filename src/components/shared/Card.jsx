import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Education</h2>
        <div className="card-body">
          <div className="card-icon">
            <a href="#">
              <MdCastForEducation />
            </a>
            <div className="edu">
              <h3>BSc. Electro-mech' Eng</h3>
              <h3>MSc. Mechatronics Eng</h3>
            </div>
          </div>
          <div className="card-icon">
            <a href="#">
              <FaCode />
            </a>
            <h3>Self tought Developer/ Designer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
