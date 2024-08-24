import React, { useState } from 'react';
import './AchievementsPage.css';

const AchievementsPage = () => {
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const [currentCertificationIndex, setCurrentCertificationIndex] = useState(0);

  const achievements = [
    {
      title: 'Code Clash',
      issuer: 'IEEE TEMS, VIT Vellore',
      date: 'June 2024',
      description: 'Achieved top 10 ranking in competitive assessment, solving questions of varying difficulty in a one-hour timeframe.',
      link: 'https://drive.google.com/file/d/1oMaUi-Zd1Xch0B34Lax1dPDmTUcWKidE/view?usp=sharing'
    },
    {
      title: 'Snow Flake Contest',
      issuer: 'Tech Gig',
      date: 'August 2024',
      description: 'Recognized for outstanding performance, achieving Rank 56 out of 200+ participants, and exemplary contribution in a national-level competition focused on Snowflake technology.',
      link: 'https://drive.google.com/file/d/1Wr9OECsdcms9BTQs07_eDYB2IT-quo3A/view?usp=drive_link'
    }
  ];

  const certifications = [
    {
      title: 'Operating Systems Basics',
      issuer: 'Cisco',
      date: 'Issued June 2024',
      link: 'https://drive.google.com/file/d/1vJW6ambT14ww4CvbRp1j1eHRvlyo8_cY/view?usp=drive_link'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: 'Issued June 2024',
      link: 'https://drive.google.com/file/d/18AqSiSFGw_Sr2AfzooetXZlua-P8xdzI/view?usp=drive_link'
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco',
      date: 'Issued June 2024',
      link: 'https://drive.google.com/file/d/1qBlezbZ3xeTx9fx3ABh6Qgm15llmZ2-4/view?usp=drive_link'
    },
    {
      title: 'Getting Started with Enterprise-grade AI',
      issuer: 'IBM',
      date: 'Issued June 2024',
      link: 'https://drive.google.com/file/d/1oi-cv2ODqLM0aQlqBt3ufjFBIXSr9bBb/view?usp=drive_link'
    },
    {
      title: 'Journey to Cloud: Envisioning Your Solution',
      issuer: 'IBM',
      date: 'Issued June 2024',
      link: 'https://drive.google.com/file/d/1W_9iZ86VKrnDvNzbJQwYVJ705kjmub3e/view?usp=drive_link'
    },
    {
      title: 'Programming using Java',
      issuer: 'Infosys Springboard',
      date: 'Issued April 2024',
      link: 'https://drive.google.com/file/d/1hMQDAh_G9oIVBk0C3FiwjYHASPdFFDpM/view?usp=drive_link'
    },
    {
      title: 'Android App using Kotlin',
      issuer: 'Indian Institute of Technology, Bombay',
      date: 'Issued March 2024',
      link: '#'
    },
    {
      title: 'Introduction to NoSQL Databases',
      issuer: 'Infosys Springboard',
      date: 'Issued March 2024',
      link: 'https://drive.google.com/file/d/1_8zg5cyu-4X76hKLRxe3vfnopm6uiBRs/view?usp=drive_link'
    },
    {
      title: 'Software Engineering and Agile Software Development',
      issuer: 'Infosys Springboard',
      date: 'Issued March 2024',
      link: 'https://drive.google.com/file/d/1wGwsemmXG1JfTdHdjawjaen35B1v4qHJ/view?usp=drive_link'
    },
    {
      title: 'Accenture Nordics - Developer Virtual Experience',
      issuer: 'Forage',
      date: 'Issued February 2024',
      link: 'https://drive.google.com/file/d/18_QG92gfxb1W6Nl84mKme3nT5_lYantb/view?usp=drive_link'
    },
    {
      title: 'Intermediate Relational Database and SQL',
      issuer: 'Coursera',
      date: 'Issued December 2023',
      link: '#'
    },
    {
      title: 'Introduction to Web Development',
      issuer: 'University of California, Davis',
      date: 'Issued December 2023',
      link: '#'
    }
  ];

  const handleAchievementPrev = () => {
    setCurrentAchievementIndex((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  const handleAchievementNext = () => {
    setCurrentAchievementIndex((prevIndex) =>
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCertificationPrev = () => {
    setCurrentCertificationIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const handleCertificationNext = () => {
    setCurrentCertificationIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index, type) => {
    if (type === 'achievement') {
      setCurrentAchievementIndex(index);
    } else {
      setCurrentCertificationIndex(index);
    }
  };

  return (
    <div className='achievements-page'>
      <h2>Achievements & Certifications</h2>
      
      <div className='slider-container'>
        <h3>Achievements</h3>
        <div className='slider-content'>
          {achievements.map((item, index) => (
            <div
              className={`slider-item ${index === currentAchievementIndex ? 'active' : ''}`}
              key={index}
              style={{ transform: `translateX(-${currentAchievementIndex * 100}%)` }}
            >
              <h4>{item.title}</h4>
              <p>{item.issuer}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='view-certificate'
              >
                View Achievement
              </a>
            </div>
          ))}
        </div>
        <div className='slider-nav'>
          <button className='nav-button prev' onClick={handleAchievementPrev}>
            &lt;
          </button>
          <button className='nav-button next' onClick={handleAchievementNext}>
            &gt;
          </button>
        </div>
        <div className='slider-dots'>
          {achievements.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentAchievementIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index, 'achievement')}
            ></div>
          ))}
        </div>
      </div>

      <div className='slider-container'>
        <h3>Certifications</h3>
        <div className='slider-content'>
          {certifications.map((item, index) => (
            <div
              className={`slider-item ${index === currentCertificationIndex ? 'active' : ''}`}
              key={index}
              style={{ transform: `translateX(-${currentCertificationIndex * 100}%)` }}
            >
              <h4>{item.title}</h4>
              <p>{item.issuer}</p>
              <p>{item.date}</p>
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='view-certificate'
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
        <div className='slider-nav'>
          <button className='nav-button prev' onClick={handleCertificationPrev}>
            &lt;
          </button>
          <button className='nav-button next' onClick={handleCertificationNext}>
            &gt;
          </button>
        </div>
        <div className='slider-dots'>
          {certifications.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentCertificationIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index, 'certification')}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
