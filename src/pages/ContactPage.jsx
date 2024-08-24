import React from 'react';
import './ContactPage.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const email = 'rikitadsouza06@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <div className="contact-page">
      <h2>Contact me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/rikita-dsouza-098147248" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/rikitadsouza" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/dsouza.rikita/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <a href={gmailComposeUrl} className="email" target="_blank" rel="noopener noreferrer">{email}</a>
      <p className="location">Mangaluru, Karnataka - India</p>
    </div>
  );
};

export default ContactPage;