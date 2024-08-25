import React from 'react';
import './LandingPage.css';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import girl2 from './girl2.png'; 

const LandingPage = () => {
  return (
    <div className="container">
      <div className="stars"></div>
      <div className="content">
        <div className="text-content">
          <h1>Rikita Chiara Dsouza</h1>
          <h3>Aspiring Software Engineer</h3>
          <p className="tagline">A Final year student pursuing B.E in Computer Science and Business Systems with a profound passion for software development, web development, and machine learning.Driven by a relentless desire to expand my skills and take on new challenges.</p>
          <p className="tagline">Always ready to CODE, LEARN, INSPIRE!</p>
          <div className="cta-group">
            <a href="#projects" className="cta-button primary">View Projects</a>
            <a href="/RikitaDsouza_resume.pdf" download className="cta-button secondary">Download resume</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rikita-dsouza-098147248" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/rikitadsouza" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/rikita.dsouza/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://medium.com/@@rikitadsouza06" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
          </div>
        </div>
        <div className="image-container">
          <img src={girl2} alt="Girl with Tech" className="girl-tech" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
