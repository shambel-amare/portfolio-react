import React from "react";
import CTA from "../shared/CTA";
import AboutCard from "./AboutCard";
import "./About.css";
function About() {
  return (
    <section id="about">
      <h5>A little bit</h5>
      <h1>About Me</h1>
      <div className="about__container">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </section>
  );
}

export default About;
