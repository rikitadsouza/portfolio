import React from 'react';
import './InternshipsPage.css';

const InternshipsPage = () => {
  const internships = [
    {
      company: 'Infosys Springboard',
      position: 'Trainee',
      duration: 'July 2024 - Ongoing',
      description: [
        'Pragati: Path to Future, a career development program for women focusing on self-growth, professional advancement, and leadership skills.',
        'Gaining technical proficiency in Python, Java, AI, and Machine Learning as part of the curriculum.'
      ]
    },
    {
      company: 'Edunet Foundation',
      position: 'AI/Cloud Intern',
      duration: 'June 2024 - July 2024',
      description: [
        'Gained hands-on experience with IBM Cloud Platform, including AI, Cloud Computing, and Data Analytics.',
        'Collaborated in a team setting, guided by mentors, to solve real-world challenges and develop projects.'
      ],
      certificate: 'https://drive.google.com/file/d/1yb3h2JVZBud_iyZjKVZw1wFj-xaFcPAM/view?usp=sharing' 
    },
    {
      company: 'CodeLab Systems',
      position: 'Frontend Development Intern',
      duration: 'October 2023 - November 2023',
      description: [
        'Developed user interfaces with ReactJS and Material UI for enhanced user experience.',
        'Proficient in HTML, CSS, and JavaScript for scalable, responsive web solutions.'
      ],
      certificate: 'https://drive.google.com/file/d/1VN46RmMMX7xyP_VTauO-d8r4TFvjldrg/view?usp=sharing' 
    }
  ];

  return (
    <div className="internships-page">
      <h2>Internships</h2>
      {internships.map((internship, index) => (
        <div key={index} className="internship-item">
          <h3>{internship.position} at {internship.company}</h3>
          <p>{internship.duration}</p>
          <ul>
            {internship.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {internship.certificate && (
            <a
              href={internship.certificate}
              className="certificate-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default InternshipsPage;
