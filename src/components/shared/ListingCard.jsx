import React, { useState } from "react";
import "./ListingCard.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ListingCard = ({ title, skill, children }) => {
  return (
    <>
      <div className="skill-box">
        <h1>{title}</h1>
        <div className="skill-list">
          {skill.map((skillItem, index) => {
            return (
              <div key={index} className="skill-item">
                <div className="content">
                  <AiFillSafetyCertificate />
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
