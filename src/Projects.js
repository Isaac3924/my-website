import React from "react";
import { useMenu } from "./MenuContext";

function Projects() {
  const { menuVisible } = useMenu();
  return (
    <div id="projects" className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="page-content">
        <div className="page-head">
          <h1 className="page-title">Projects</h1>
        </div>
        <div className="projects">
          <div className="projects-image-viewer">
            <div className="projects-image-viewer-content">
              <div className="projects-image-wrapper">
                <div id="TLDR" className="projects-image-size">

                </div>
              </div>
            </div>
          </div>
          <div className="projects-list-viewer">
            <div className="projects-list-top-wrapper">
              <div className="projects-list-header">
              </div>
            </div>
            <ul className="projects-list">
              <li className="project-list-element">
                <a href="projects/tldr">
                  <div id="first-row" className="projects-row">
                    <div className="projects-row-left">
                      <h3>TL:DR</h3>
                    </div>
                    <div className="projects-row-right">
                      <h4>Python Web Application</h4>
                    </div>
                  </div>
                </a>

              </li>
              <li className="project-list-element">
                <a href="https://www.linkedin.com/in/isaacalter/">
                  <div className="projects-row">
                    <div className="projects-row-left">
                      <h3>LinkedIn</h3>
                    </div>
                    <div className="projects-row-right">
                      <h4>REPLACE_ME</h4>
                    </div>
                  </div>
                </a>
              </li>
              <li className="project-list-element">
                <a href="https://www.linkedin.com/in/isaacalter/">
                  <div className="projects-row">
                    <div className="projects-row-left">
                      <h3>Whether-Sweater</h3>
                    </div>
                    <div className="projects-row-right">
                      <h4>REPLACE_ME</h4>
                    </div>
                  </div>
                </a>
              </li>
              <li className="project-list-element">
                <a href="https://www.linkedin.com/in/isaacalter/">
                  <div className="projects-row">
                    <div className="projects-row-left">
                      <h3>Viewing Party</h3>
                    </div>
                    <div className="projects-row-right">
                      <h4>REPLACE_ME</h4>
                    </div>
                  </div>
                </a>
              </li>
              <li className="project-list-element">
                <a href="https://www.linkedin.com/in/isaacalter/">
                  <div className="projects-row">
                    <div className="projects-row-left">
                      <h3>Little Esty Shop</h3>
                    </div>
                    <div className="projects-row-right">
                      <h4>REPLACE_ME</h4>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;