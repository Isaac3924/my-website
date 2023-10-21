import React from "react";
import { useMenu } from "./MenuContext";

function Home() {
  const { menuVisible } = useMenu();
  return (
    <div className={`page ${menuVisible ? 'menu-visible' : ''} home`}>
      <div className="page-head">
        <h1 className="page-title">Isaac Alter</h1>
      </div>
      <div className="page-intro">
        <h3 className="page-subtitle">Designer and Developer</h3>
        <h3 className="page-instructions">Feel free to navigate the menu below to learn more about me.</h3>
      </div>
    </div>
  );
};

export default Home;