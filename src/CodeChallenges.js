import React from "react";
import { useMenu } from "./MenuContext";

function CodeChallenges() {
  const { menuVisible } = useMenu();
  return (
    <div className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="page-head">
        <h1 className="page-title">Code Challenges</h1>
      </div>
    </div>
  );
};

export default CodeChallenges;