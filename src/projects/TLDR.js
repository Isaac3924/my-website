import React from "react";
import { useMenu } from "../MenuContext";

function TLDR() {
  const { menuVisible } = useMenu();
  return (
    <div className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="project">
        
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
                  <td>
                    <h4>Tech Stack</h4>
                  </td>

                  <td>
                    <ul>
                      <li>Python</li>


                    </ul>
                  </td>

                </tr>

                <tr>
                  <td>
                    <h4>Year</h4>
                  </td>

                  <td>
                    <p>2023</p>
                  </td>

                </tr>

                <tr>
                  <td>
                    <h4>Team</h4>
                  </td>

                  <td>
                    <ul>
                      <li>Axel</li>


                    </ul>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>

          <div className="project-desciption">
            <p>
              This is where the project description will be.
            </p>

            <div className="project-website">
              <div className="link-wrapper">
                <div className="link">
                  <a href="https://tldr-tos.vercel.app/">Visit Website</a>
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