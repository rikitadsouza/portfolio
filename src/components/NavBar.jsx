import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'expanded' : 'collapsed'}>
        <li className="logo" onClick={() => scrollToSection('home')}>
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer' }} // Ensure it's clickable
          >
            <circle className="circle-outer" cx="12" cy="12" r="10" />
            <circle className="circle-middle" cx="12" cy="12" r="6" />
            <circle className="circle-inner" cx="12" cy="12" r="2" />
          </svg>
        </li>
        <li><a onClick={() => scrollToSection('home')}>About</a></li>
        <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a onClick={() => scrollToSection('internships')}>Internships</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a onClick={() => scrollToSection('achievements')}>Achievements</a></li>
        <li><a onClick={() => scrollToSection('positions')}>Communities</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
