import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects">
      <h5>Here are some of my</h5>
      <h1>PROJECTS</h1>
      <div className="about__container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
