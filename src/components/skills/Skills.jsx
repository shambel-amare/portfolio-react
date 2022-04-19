import React from "react";
import "./Skills.css";
import ListingCard from "../shared/ListingCard";
import { SiStrapi } from "react-icons/si";
const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="title-container-cover">
          <div className="titlebar">
            <h1>03: </h1>
            <h1>Experiences</h1>
          </div>
        </div>
        <div className="skill-container">
          <ListingCard title="Frontend">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </ListingCard>
          <ListingCard title="Backend">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <SiStrapi
              style={{
                height: "5rem",
                width: "5rem",
                color: "var(--color-ghost)",
              }}
            />
          </ListingCard>
          <ListingCard title="Design">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
              alt="Adobe Xd"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
              alt="Photoshop"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg"
              alt="Webflow"
            />
          </ListingCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
