import React, { useEffect } from "react";
import { useMenu } from "../MenuContext";
import mainpic from '../pictures/tldr_home.png';

function TLDR() {
  const { menuVisible } = useMenu();
  
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
          <div className="page-head">
            <h1 className="page-title">TL:DR</h1>
          </div>
        </div>

        <div className="project-info">

          <div className="project-data">
            <table className="table-tldr">
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
                          <td>
                            Axel De La Guardia
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Elle Majors
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Hady Matar
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Conner Van Loan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Jesus Borjas
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Chrissy Cooper
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Jason Kirchman
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
            <div className="project-summary">
              <p className="project-paragraph">
                A web platform that helps you understand the terms and conditions of services you sign up for in a simpler way. Instead of having to read through long and complex legal documents, you can copy and paste them into our platform and select the things you're most concerned about, like privacy or recurring payments. Our platform will then show you a summary of how those specific things might affect you, with an overall score that helps you see how good or bad they are. We also give you suggestions for what you can do if you don't like what you see. We want to make it easier for you to understand what you're agreeing to when you use a service, and help you protect your rights.
              </p>
            </div>

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
          <h6>Login</h6>
          <div className="project-content-wrapper">
            <img alt="Login screenshot"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TLDR;