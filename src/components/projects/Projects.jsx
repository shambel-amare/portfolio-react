import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h5>Here are some of my</h5>
        <h1>PROJECTS</h1>
        <div className="project__container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
