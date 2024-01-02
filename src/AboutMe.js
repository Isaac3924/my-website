import React from "react";
import { useMenu } from "./MenuContext";
import GridBackground from "./components/animeGridBackground";

function AboutMe() {
  const { menuVisible } = useMenu();
  return (
    <div id="aboutMe" className={`page ${menuVisible ? 'menu-visible' : ''} aboutme`}>
      <div className="page-text">
        <div className="page-head">
          <h1 className="page-title">About</h1>
        </div>
        <div className="page-content">
          <p className="about-summary">Hi, I'm Isaac Alter, and I am a web developer specializing in Back-End development currently based in Colorado Springs, Colorado. I've worked in a variety of langugages and tech stacks, ranging from the Ruby on Rails framework, Python, C#, C++, and Java. I am also familiar with PostgreSQL, MySQL, HTML, CSS, JavaScript, and the React framework. Additionally, I am a big fan of stories and games, especially manga and any sort of tabletop or video game! I use these stories and experiences to inspire my work and consider new ideas and challenges for myself, and am always seeking new concepts and views to further my own knowledge.</p>
          <p className="about-contact">If you would like to speak further, feel free to reach me via my LinkedIn at the top right of the page, or email me here. Feel free to look at my projects page to see my work, see what sorts of code challenges I am taking up and practicing, or browse my GitHub also reachable from the top right of the page.</p>
        </div>
      </div>
      <div className="page-background">
        <GridBackground/>
      </div>
    </div>
  );
};

export default AboutMe;