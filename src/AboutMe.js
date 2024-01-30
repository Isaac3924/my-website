import React, { useState } from "react";
import { useMenu } from "./MenuContext";
import GridBackground from "./components/animeGridBackground";
import profile from './pictures/profile.png';

function AboutMe() {
  const { menuVisible } = useMenu();
  const [toggled, setToggled] = useState(false);

  const handleOnClick = () => {
    setToggled((prevToggled) => !prevToggled);
  };

  return (
    <div id="aboutMe" className={`page ${menuVisible ? 'menu-visible' : ''} ${toggled ? 'toggled' : ''}`}>
      <div className="page-content">
        <div className="page-head">
          <h1 className="page-title">About</h1>
        </div>
        <div className="page-body">
          <div className="first-row">
            <div className="profile-wrapper">
              <img className="profile-pic" src={profile} alt="Profile" />
            </div>
            <div className="summaries">
              <div className="summary-wrapper">
                <p className="about-summary">Hi, I'm Isaac Alter, and I am a web developer specializing in Back-End development currently based in Colorado Springs, Colorado. I've worked in a variety of langugages and tech stacks, ranging from the Ruby on Rails framework, Python, C#, C++, and Java. I am also familiar with PostgreSQL, MySQL, HTML, CSS, JavaScript, and the React framework.</p>
              </div>
              <div className="summary-wrapper">
                <p className="about-summary">Additionally, I am a big fan of stories and games, especially manga and any sort of tabletop or video game! I use these stories and experiences to inspire my work and consider new ideas and challenges for myself, and am always seeking new concepts and views to further my own knowledge.</p>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="summary-wrapper">
              <p className="about-summary">If you would like to speak further, feel free to reach me via my LinkedIn at the top right of the page, or email me here. Feel free to look at my projects page to see my work, see what sorts of code challenges I am taking up and practicing, or browse my GitHub which is also reachable from the top right of the page.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-background" onClick={handleOnClick}>
        <GridBackground toggled={toggled} handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default AboutMe;