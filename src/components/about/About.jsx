import React from "react";
import CTA from "../shared/CTA";
import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="container-lead">
        <div className="titlebar">
          <h1>01:</h1>
          <h1>About me</h1>
        </div>
        <div className="about-block">
          <div className="my-content">
            <p>
              Hello, My name is Shambel Amare, a <span>Web Developer</span> and{" "}
              <span>UI/UX Designer </span>
              from Ethiopia. I am a self-tought programmer both on the backend
              and frontend realms. I enjoy taking projects from the start and be
              part of the tought process, Design and Development. My goal is to
              listen to ideas and tranform them in to a reality. I have a Bsc in
              <span> electromechanical engineering </span> and Msc in
              <span> mechatronics engineering </span> from Addis Ababa Science
              and Technology University (<span>AASTU</span>)
            </p>
            <div className="lets-talk">
              <CTA className="btn" text="Lets Talk" />
            </div>
          </div>
          <div className="about-pic"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
