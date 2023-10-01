import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import CodeChallenges from './CodeChallenges';
import TLDR from './projects/TLDR';
import Navigation from './Navigation';
import './App.css';

//Establishes the routes to my pages which are React components.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/code-challenges" element={<CodeChallenges />} />
        <Route path="/projects/tldr" element={<TLDR/>} />
      </Routes>
      <div class="navigation">
        <Navigation />
      </div>
    </Router>
  );
};

export default App;