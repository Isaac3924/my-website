import React from "react";
import { useMenu } from "./MenuContext";
import ParticleBackground from "./components/particleBackground";

function Home() {
  const { menuVisible } = useMenu();
  return (
    <div className={`page ${menuVisible ? 'menu-visible' : ''} home`}>
      <div className="page-head">
        <h1 className="home-title1">Hello, my name is Isaac Alter</h1>
        <h1 className="home-title2">Thank you for visiting my site</h1>
      </div>
      <div className="home-intro">
        <p className="page-subtitle">I'm a developer and designer with a specialized interest in Back-End development</p>
      </div>
      <ParticleBackground />
    </div>
  );
};

export default Home;