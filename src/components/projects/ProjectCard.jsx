import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";

import "./Projects.css";
const ProjectCard = ({ title, children, techstack }) => {
  return (
    <section id="project-card">
      <div className="projectcard-container">
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <div className="card-body">
              <div className="card-icon">
                <a href="#">
                  <MdCastForEducation />
                </a>
                <div className="edu">{children}</div>
              </div>
              <div className="card-icon">
                <a href="#">
                  <MdLiveHelp />
                  <h3>Live</h3>
                </a>
                <a href="#">
                  <AiOutlineGithub />
                  <h3>Github</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
