import React from 'react';
import './ProjectsPage.css'; // Import the CSS file

const ProjectsPage = () => {
  const projects = [
    {
      title: 'MealEase 1.0 - A recipe suggestion website',
      description: 'MealEase 1.0 is a frontend project aimed at enhancing culinary experiences by providing a user-friendly interface for exploring recipes.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      link: 'https://github.com/rikitadsouza/MealEase1.0' // Add your project link here
    },
    {
      title: 'MealEase 2.0 - A recipe suggestion website',
      description: 'An innovative platform designed to simplify culinary experience. By inputting available ingredients, it generates personalized meal suggestions and detailed recipes.',
      technologies: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      link: 'https://github.com/rikitadsouza/MealEase_2.0' // Add your project link here
    },
    {
      title: 'AI text summarizer App',
      description: 'An AI-powered web app using Facebook BART for text summarization. It preprocesses and summarizes long texts, providing concise outputs. The user-friendly interface ensures accurate and efficient summarization.',
      technologies: ['Postman', 'Node.js', 'Express', 'Hugging Face Inference API', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/rikitadsouza/AI-Text-Summarizer-App' // Add your project link here
    },
    {
      title: 'StockIQ - Stock Prediction Chatbot',
      description: 'StockIQ is a Streamlit-based web application that provides stock analysis, predictions, and financial insights using artificial intelligence and real-time market data.',
      technologies: [
        'Streamlit',
        'Python-dotenv',
        'Google Generative AI',
        'yfinance',
        'Matplotlib',
        'TA (Technical Analysis Library)',
        'Requests',
        'Pillow (PIL)',
        'Datetime'
    ]
    ,
      link: 'https://github.com/rikitadsouza/stockIQ' // Add your project link here
    },
    {
      title: 'Invoica - A tool for processing and extracting information from invoice images',
      description: 'Invoica is a Python-based tool designed to streamline invoice processing. By leveraging Google\'s Gemini AI model, it extracts detailed information from invoice images and provides an interactive Q&A system for invoice details.',
      technologies: ['Streamlit','Python', 'Google Generative AI','Pillow (PIL)'],
      link: 'https://github.com/rikitadsouza/Invoica-GenAI' // Add your project link here
    }
  ];

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.features && (
            <>
              <h4>Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {project.dependencies && (
            <>
              <h4>Dependencies:</h4>
              <ul>
                {project.dependencies.map((dep, i) => (
                  <li key={i}>{dep}</li>
                ))}
              </ul>
            </>
          )}
          {project.technologies && (
            <>
              <h4>Tech Stack:</h4>
              <p>{project.technologies.join(', ')}</p>
            </>
          )}
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
