import React from "react";
import "./Skills.css";
import ListingCard from "../shared/ListingCard";
import { SkillData } from "./SkillData";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h5>Skills I have</h5>
        <h1>EXPERIENCE</h1>
        <div className="skill-container">
          <ListingCard title="Frontend" skill={SkillData.frontEnd}>
            <h5>Experienced</h5>
          </ListingCard>
          <ListingCard title="Backend" skill={SkillData.backEnd}>
            <h5>Experienced</h5>
          </ListingCard>
          <ListingCard title="Design" skill={SkillData.design}>
            <h5>Experienced</h5>
          </ListingCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
