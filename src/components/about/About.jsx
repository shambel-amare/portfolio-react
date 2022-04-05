import React from "react";
import CTA from "../shared/CTA";
import AboutCard from "./AboutCard";
import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="container">
        <h5>A little bit</h5>
        <h1>ABOUT ME</h1>
        <div className="my-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            necessitatibus expedita provident sunt magni tempore earum itaque at
            corrupti, ullam dignissimos, reiciendis adipisci eveniet velit totam
            eius reprehenderit, est minus. Voluptatem libero commodi vel
            asperiores maxime quasi rerum incidunt deleniti, qui ad inventore
            cupiditate quod aspernatur nihil sunt eveniet provident?
          </p>
        </div>
        <div className="about__container">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
        <div className="my-content">
          <CTA className="btn" text="Lets Talk" />
        </div>
      </div>
    </section>
  );
}

export default About;
