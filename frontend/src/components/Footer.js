import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <a href="/" className="footer-logo">
              Hashen Ruwanpura<span>.</span>
            </a>
            <p>
              A passionate Cybersecurity Professional with a drive to enhance digital security
              and protect organizations from evolving threats.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/hashen-ruwanpura" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/hashen-ruwanpura" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/hashenruwanpura" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/hashenruwanpura" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Me</h3>
            <div className="footer-contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <div className="contact-text">hashr.work@gmail.com</div>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div className="contact-text">Sri Lanka</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Hashen Ruwanpura. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
