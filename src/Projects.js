import React, { useState } from "react";
import { useMenu } from "./MenuContext";
import { Link } from 'react-router-dom';
import tldr from './pictures/tldr.png';
import whether_sweater from './pictures/whether_sweater.png'
import tea_subs from './pictures/tea_subs.png'
import viewing_party from './pictures/viewing_party.png'
import little_esty_shop from './pictures/little_esty_shop.png'

function Projects() {
  const { menuVisible } = useMenu();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundPositionIndex, setBackgroundPositionIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setBackgroundPositionIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const projects_Array = [
    ["tldr", "TL:DR", "Python Web Application", tldr],
    ["whether_sweater", "Whether-Sweater", "Ruby Back-End API Aggregate", whether_sweater],
    ["tea_subs", "Tea Subs API", "Ruby Back-End API", tea_subs],
    ["viewing_party", "Viewing Party", "Ruby Back-End DB Application", viewing_party],
    ["little_esty_shop", "Little Esty Shop", "Ruby Back-End E-Commerce Application", little_esty_shop]
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
              {projects_Array.map((slug, index) => (
                <div key={index} className="projects-image-wrapper" style={{ opacity: hoveredIndex === index ? 1 : 0 }}>
                  <div className="projects-image-size">
                    <img className="project-image" src={slug[3]} alt= {slug[1] + "_image"}/>
                  </div>
                </div>
              ))}
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
                  <Link to={`/projects/${slug[0]}`}>
                    <div className="projects-row">
                      <div className="projects-row-left">
                        <h3>{`${slug[1]}`}</h3>
                      </div>
                      <div className="projects-row-right">
                        <h4>{`${slug[2]}`}</h4>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="projects-background" className="page-background" style={
        { backgroundSize: hoveredIndex !== null ? '4% 6%' : '5% 7%', 
          backgroundPosition: backgroundPositionIndex === 0 ? '0% -20%' :
                              backgroundPositionIndex === 1 ? '0% -40%' :
                              backgroundPositionIndex === 2 ? '0% -60%' :
                              backgroundPositionIndex === 3 ? '0% -80%' :
                              backgroundPositionIndex === 4 ? '0% -100%' : ''
        }}>
        
      </div>
    </div>
  );
};

export default Projects;