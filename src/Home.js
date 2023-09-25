import React from "react";
import Navigation from "./Navigation";

function Home() {
  return (
    <div className="home">
      <div class="Home-title">
        <h1>Welcome Page</h1>
      </div>
      <div class="navigation">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;