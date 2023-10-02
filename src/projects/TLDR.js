import React from "react";

function TLDR() {
  return (
    <body>
      <div class="project">
        
        <div class="project-title">
          <div class="page-head">
            <h1 class="page-title">TL:DR</h1>
          </div>
        </div>

        <div class="project-info">

          <div class="project-data">
            <table class="table-tldr">
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

          <div class="project-desciption">
            <p>
              This is where the project description will be.
            </p>

            <div class="project-website">
              <div class="link-wrapper">
                <div class="link">
                  <a href="https://tldr-tos.vercel.app/">Visit Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="project-media">
          <h6>Login</h6>
          <div class="project-content-wrapper">
            <img alt="Login screenshot"></img>
          </div>
        </div>
      </div>
    </body>
  );
};

export default TLDR;