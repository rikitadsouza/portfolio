import React from 'react';
import './PositionsPage.css'; // Import the CSS file

const PositionsPage = () => {
  const positions = [
    {
      organization: "YUVA - Chapter of CII",
      title: "Chairperson - SJEC",
      duration: "Jan 2024 - Present",
      linkedin: "https://www.linkedin.com/company/young-indians/posts/?feedView=all",
      website: "https://youngindians.net/"
    },
    {
      organization: "Indo Universal Collaboration for Engineering Education (IUCEE)",
      title: "Vice President - SJEC",
      duration: "Aug 2023 - Present",
      linkedin: "https://www.linkedin.com/company/indo-universal-collaboration-for-engineering-education/posts/?feedView=all",
      website: "https://www.iucee.org"
    },
    {
      organization: "Innoventure SJEC",
      title: "Founding Member and Core Member",
      duration: "Jan 2023 - Present",
      linkedin: "https://www.linkedin.com/company/innoventure-sjec/?viewAsMember=true",
      website: "https://sites.google.com/view/innoventure-sjec/home?fbclid=PAAaaGb1Jpv8BtMTkJQJ1I91uOCsDrDLgWEZBFAGE8eY50s9L_TYzq-C6aYu0"
    },
  
    {
      organization: "Institute of Electrical and Electronics Engineers (IEEE)",
      title: "Member",
      duration: "Dec 2022 - Nov 2023",
      linkedin: "https://www.linkedin.com/company/ieee/",
      website: "https://www.ieee.org"
    }
  ];

  return (
    <div className="positions-page">
      <h2>Communities</h2>
      <div className="positions-grid">
        {positions.map((position, index) => (
          <div key={index} className="position-item">
            <h4>{position.organization}</h4>
            <p>{position.title}</p>
            <p>{position.duration}</p>
            {position.description && <p>{position.description}</p>}
            <div className="links">
              <a href={position.linkedin} target="_blank" rel="noopener noreferrer" className="button">LinkedIn</a>
              <a href={position.website} target="_blank" rel="noopener noreferrer" className="button">Website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PositionsPage;
