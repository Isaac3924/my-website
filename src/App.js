import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ProjectPage from './components/projectPage'
import projects from './projects/projectData';
import Navigation from './Navigation';
import { MenuProvider } from './MenuContext';
import linkedin from './pictures/linkedin.png';
import github from './pictures/github.png';
import './App.css';

//Establishes the routes to my pages which are React components.
function App() {
  return (
    <MenuProvider>
      <div className="app">
        <div className='contact-icons'>
          <a className='linkedin' href='https://www.linkedin.com/in/isaacalter/'>
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a className='github' href='https://github.com/Isaac3924'>
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <Router>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path ="/projects/:projectId" element={<ProjectPage />} />
          </Routes>

        </Router>
      </div>
    </MenuProvider>
  );
};

export default App;