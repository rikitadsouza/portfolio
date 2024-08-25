import React, { useState } from 'react';
import './SkillsPage.css';

const SkillsPage = () => {
  const [rotation, setRotation] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const rotatePentagon = (direction) => {
    setRotation((prevRotation) => prevRotation + direction * 72);
  };

  const skillIcons = [
    'react', 'python', 'java', 'javascript', 'html5', 'css3',
    'nodejs', 'mongodb', 'mysql', 'git', 'docker', 'kotlin','webpack'
  ];

  return (
    <div className="skills-page">
      <div className="content">
        <h2>Skills</h2>
        <div className="pentagon-container">
          <button className="arrow-button left" onClick={() => rotatePentagon(-1)}>&larr;</button>
          <div className="pentagon" style={{ transform: `rotateY(${rotation}deg)` }}>
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`pentagon-face ${activeCategory === category.name ? 'active' : ''}`}
                style={{
                  transform: `rotateY(${index * 72}deg) translateZ(200px)`,
                }}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="face-content">
                  <h3>{category.name}</h3>
                  {activeCategory === category.name && (
                    <ul className="skills-list">
                      {category.skills.map((skill) => (
                        <li key={skill.name}>{skill.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="arrow-button right" onClick={() => rotatePentagon(1)}>&rarr;</button>
        </div>
      </div>
      <div className="skill-icons-container">
        {skillIcons.map((icon, index) => (
          <img
            key={index}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt={icon}
            className="skill-icon"
          />
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C/C++' },
    ],
  },
  {
    name: 'Databases & Web Dev',
    skills: [
      { name: 'SQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'ExpressJS' },
      { name: 'ReactJS' },
      { name: 'NodeJS' },
      { name: 'WordPress' },
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
      { name: 'PHP' },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Postman' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'Scikit-learn' },
      { name: 'Natural Language Processing' },
      { name: 'Computer Vision' },
      { name: 'Data Analysis' },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Leadership' },
      { name: 'Event Management' },
      { name: 'Public Speaking' },
      { name: 'Event Hosting' },
    ],
  },
];

export default SkillsPage;