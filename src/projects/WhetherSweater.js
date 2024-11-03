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
    <div id="project-whether-sweater" className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="project">
        <div className="project-wrapper">
          
        </div>

        <div className="title-pic">
          <div className="title-pic-wrapper">
            <img className="whether-sweater-main-pic" src={mainpic} alt="TL:DR Home Page" />
          </div>
        </div>
        
        <div className="project-title">
          <div id="project-head" className="page-head">
            <h1 className="page-title">Whether Sweater</h1>
          </div>
        </div>

        <div className="project-info">

          <div className="project-summary">
            <p className="project-paragraph">
              Whether Sweater is an API that aggregates data from multiple external APIs and exposes them through a JSON API with CRUD functionality. 
            </p>

            <p className="project-paragraph">
              The application allows for the creation/registration of users and stores the information onto a database and the ability to login to said account with a JSON payload being returned that will have a generated API key for security.
            </p> 

            <p className="project-paragraph">
              The API is designed to allow users to plan out road trips by both displaying the current weather at their destination, and the forecasted weather for when they arrive by making use of MapQuest's API and the WeatherAPI.
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
                            Ruby on Rails
                          </td>
                        </tr>
                        <tr>
                          <td>
                            HTML
                          </td>
                        </tr>
                        <tr>
                          <td>
                            RSpec
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Postman
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