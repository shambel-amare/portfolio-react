import React from "react";
import { FaCode } from "react-icons/fa";

import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="container-cover">
          <div className="titlebar">
            <h1>02: </h1>
            <h1>Projects</h1>
          </div>
        </div>
        <div className="project__container">
          <ProjectCard title="House Listing market place">
            <h3 style={{ color: "var(--color-orange)" }}>Description:</h3>
            <p>
              A website build with react in the Frontend and firbase at the
              Backend
            </p>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
