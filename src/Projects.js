import React, { useState } from "react";
import { useMenu } from "./MenuContext";
import TLDR from './pictures/profile.png';
import OTHER from './pictures/github.png'

function Projects() {
  const { menuVisible } = useMenu();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const projects_Array = [
    ["tldr", "TL:DR", "Python Web Application"],
    ["address_here", "LinkedIn", "REPLACE_ME"],
    ["address_here", "Whether-Sweater", "REPLACE_ME"],
    ["address_here", "Viewing Party", "REPLACE_ME"],
    ["address_here", "Little Esty Shop", "REPLACE_ME"]
  ]

  return (
    <div id="projects" className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="page-content">
        <div className="page-head">
          <h1 className="page-title">Projects</h1>
        </div>
        <div className="projects">
          <div className="projects-image-viewer">
            <div className="projects-image-viewer-content">
              <div className="projects-image-wrapper" style={{ opacity: hoveredIndex === 0 ? 1 : 0 }}>
                <div id="TLDR-picture" className="projects-image-size">
                  <img className="TLDR-image" src={TLDR} alt="TLDR_image"/>
                </div>
              </div>
              <div id="OTHER-wrapper" className="projects-image-wrapper" style={{ opacity: hoveredIndex === 1 ? 1 : 0 }}>
                <div id="OTHER-picture" className="projects-image-size">
                  <img className="OTHR-image" src={OTHER} alt="TLDR_image"/>
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
              {projects_Array.map((slug, index) => (
                <li key={index} className="project-list-element" onMouseEnter={
                  () => handleMouseEnter(index)
                } onMouseLeave={handleMouseLeave}
                >
                  <a href={`projects/${slug[0]}`}>
                    <div className="projects-row">
                      <div className="projects-row-left">
                        <h3>{`${slug[1]}`}</h3>
                      </div>
                      <div className="projects-row-right">
                        <h4>{`${slug[2]}`}</h4>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;