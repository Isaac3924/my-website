import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import CodeChallenge from './CodeChallenge';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/code-challenge" element={<CodeChallenge />} />
      </Routes>
    </Router>
  );
};

export default App;