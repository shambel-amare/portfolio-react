import React, { useState } from "react";
import "./ListingCard.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ListingCard = ({ title, skill, children }) => {
  return (
    <>
      <div className="skill-box">
        <div className="skill-title">
          <h1>{title}</h1>
        </div>
        <div className="skill-list">
          {skill.map((skillItem, index) => {
            return (
              <div key={index} className="skill-item">
                <div className="content">
                  <div className="content-icon">
                    <AiFillSafetyCertificate />
                  </div>
                  <h2>{skillItem}</h2>
                </div>
                {children}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListingCard;
