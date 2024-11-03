import React, { useState } from "react";
import { useMenu } from "../MenuContext";
import Modal from "../components/Modal"
import mainpic from '../pictures/tldr_home.png';
import input from '../pictures/tldr_input.png'
import output from '../pictures/tldr_output.png'
import DriftBackground from "../components/driftingBackground";

function TLDR() {
  const { menuVisible } = useMenu();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  
  /*
  useEffect(() => {
    //Find the app element to modify its styles
    const appElement = document.querySelector('.app');
    if(appElement) {
      appElement.style.height = 'auto';
      appElement.style.overflowY = 'auto';
    }

  }, []);
  */
  return (
    <div id="project-tldr" className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="project">
        <div className="project-wrapper">
          
        </div>

        <div className="title-pic">
          <div className="title-pic-wrapper">
            <img className="tldr-main-pic" src={mainpic} alt="TL:DR Home Page" />
          </div>
        </div>
        
        <div className="project-title">
          <div id="project-head" className="page-head">
            <h1 className="page-title">TL:DR</h1>
          </div>
        </div>

        <div className="project-info">

          <div className="project-summary">
            <p className="project-paragraph">
              A web platform that helps users understand the terms and conditions of services a user might sign up for in a simpler way. Instead of having to read through long and complex legal documents, a user can copy and paste them into the platform and select the things they're most concerned about i.e. privacy or recurring payments.
            </p>

            <p className="project-paragraph">
              The platform will then show the user a summary of how those specific concerns might apply, with an overall score that helps the user see how a legal document rates in comparison to their selected concens. The application also gives suggestions for what the user can do if they don't like what they see. 
            </p> 

            <p className="project-paragraph">
              The goal of this application was to make it easier for others to understand what they're agreeing to when they use a service, and help users protect their rights.
            </p>
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
                        <tr>
                          <td>
                            Python
                          </td>
                        </tr>
                        <tr>
                          <td>
                            TypeScript
                          </td>
                        </tr>
                        <tr>
                          <td>
                            CSS
                          </td>
                        </tr>
                        <tr>
                          <td>
                            HTML
                          </td>
                        </tr>
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
                            2023
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                </tr>

                <tr>
                  <td className="team-title">
                    <h4>Team:</h4>
                  </td>

                  <td className="team-info">
                    <table className="team-table">
                      <tbody>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/axeldelaguardia/">Axel De La Guardia</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/ellemajors/">Elle Majors</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/hady-emmanuel-matar/">Hady Matar</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/conner-van-loan/">Conner Van Loan</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/jesus-borjas-6589b920a/">Jesus Borjas</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/christinercooper/">Chrissy Cooper</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="team-member-td">
                            <a className="team-member-link" href="https://www.linkedin.com/in/jason-kirchman/">Jason Kirchman</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="project-description">
            <div className="project-links">
              <div className="link-wrapper">
                <div className="link">
                  <a className="hyperlink" href="https://tldr-tos.vercel.app/">Visit Website</a>
                </div>
              </div>
              <div className="link-wrapper">
                <div className="link">
                  <a className="hyperlink" href="https://github.com/TooLong-DidntRead/tldr_api">Visit Repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-media">
          <div className="project-media-wrapper">
            <div className="project-media-header-wrapper">
              <h4>Terms of Service Input</h4>
            </div>
            <div
              className="project-media-content-wrapper" 
              onClick={() => openModal(input)}
              style={{ cursor: "pointer" }} 
            >
              <img className="tldr-pic" src={input} alt="TL:DR TOS Input Page" />
            </div>
          </div>
          <div className="project-media-wrapper">
            <div className="project-media-header-wrapper">
              <h4>Summarized Output</h4>
            </div>
            <div
              className="project-media-content-wrapper" 
              onClick={() => openModal(output)}
              style={{ cursor: "pointer" }} 
            >
              <img className="tldr-pic" src={output} alt="TL:DR TOS Output Page" />
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <img src={modalImage} alt="Project Preview" style={{ width: "100%" }} />
        </Modal>

      </div>
      <DriftBackground />
    </div>
  );
};

export default TLDR;