import React from "react";

function Projects() {
  return (
    <div className="page">
      <div className="page-head">
        <h1 className="page-title">Projects</h1>
      </div>
      <div className="page-list">
        <ul className="list-projects">
          <li>
            <a href="projects/tldr">TL:DR</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/isaacalter/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;