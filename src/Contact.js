import React from "react";
import { useMenu } from "./MenuContext";

function Contact() {
  const { menuVisible } = useMenu();
  return (
    <div className={`page ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="page-head">
        <h1 className="page-title">Contact Me</h1>
      </div>
      <div className="page-list">
        <ul className="list-contact">
          <li>
            <a href="https://github.com/Isaac3924">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/isaacalter/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;