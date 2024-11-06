import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMenu } from "../MenuContext";
import Modal from "./Modal"
import DriftBackground from "./driftingBackground";
import projects from "../projects/projectData";

function ProjectPage() {
  const { menuVisible } = useMenu();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const { projectId } = useParams();
  const project = projects[projectId];

  console.log("projectId:", projectId);
  console.log("project:", project);

  if (!project) {
    return <div>Project not found</div>
  }

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div id={`project-${project.id}`} className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="project">
        <div className="project-wrapper">
          
        </div>

        <div className="title-pic">
          <div className="title-pic-wrapper">
            <img className="main-pic" src={project.mainImage} alt={`${project.title} Main Image`} />
          </div>
        </div>

        <div className="project-title">
          <div id="project-head" className="page-head">
            <h1 className="page-title">{project.title}</h1>
          </div>
        </div>

        <div className="project-info">

          <div className="project-summary">
            {project.description.map((paragraph, index) => (
              <p key={index} className="project-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="project-data">
            <table className="project-table">
              <tbody>

                <tr>
                  <td className="tech-stack-title">
                    <h4>Tech Stack:</h4>
                  </td>

                  <td className="tech-stack-info">
                    <table className="tech-stack-table">
                      <tbody>
                        {project.techStack.map((tech, index) => (
                        <tr key={index}>
                          <td>
                            {tech}
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td className="year-title">
                    <h4>Year:</h4>
                  </td>

                  <td className="year-info">
                    <table className="year-info-table">
                      <tbody>
                        <tr className="year-info-row">
                          <td className="year-info-text">
                            {project.year}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {project.team && project.team.length > 0 &&(
                  <tr>
                    <td className="team-title">
                      <h4>Team:</h4>
                    </td>

                    <td className="team-info">
                      <table className="team-table">
                        <tbody>
                          {project.team.map((member, index) => (
                            <tr key={index}>
                              <td className="team-member-td">
                                <a className="team-member-link" href={member.link}>{member.name}</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="project-description">
            <div className="project-links">
              {project.links.map((link, index) => (
                <div className="link-wrapper" key={index}>
                  <div className="link">
                    <a className="hyperlink" href={link.site}>{link.text}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-media">
            {project.media.map ((mediaItem, index) => (
              <div key={index} className="project-media-wrapper">
                <div className="project-media-header-wrapper">
                  <h4>{mediaItem.title}</h4>
                </div>
                <div
                  className="project-media-content-wrapper" 
                  onClick={() => openModal(mediaItem.image)}
                  style={{ cursor: "pointer" }} 
                >
                  <img className="media-pic" src={mediaItem.image} alt={mediaItem.title} />
                </div>
              </div>
            ))}
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <img src={modalImage} alt="Project Preview" style={{ width: "100%" }} />
          </Modal>

        </div>

        <DriftBackground />
      </div>
    </div>
  );
}

export default ProjectPage;