import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Let me introduce myself</p>
        </div>

        <div className="about-container" ref={ref}>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-img-decoration"></div>
            <img src="/images/myimage.JPG" alt="Hashen Ruwanpura" className="about-img" />
            <div className="about-img-experience">
              <h3 className="about-exp-number">3+</h3>
              <p className="about-exp-text">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2>My Background</h2>
            <p className="about-subtitle">Cybersecurity Professional from Sri Lanka</p>
            <p className="about-description">
              Hi there 👋 I am Hashen Ruwanpura, a passionate Cybersecurity Researcher and professional 
              from Sri Lanka with a focus on finding vulnerabilities and contributing to a safer digital 
              world. I recently graduated with First Class Honors in BSc. Computer Security and am 
              currently writing a research paper on my final year project, LogSentry.
            </p>
            <p className="about-description">
              With expertise in computer security assessments, secure coding practices, log analyzing, and SIEM platforms,
              I'm dedicated to protecting digital assets from evolving cyber threats. My approach combines
              technical skills with a strategic mindset to deliver comprehensive security solutions.
            </p>

            <div className="about-info">
              <div className="about-info-item">
                <h4 className="about-info-title">3+</h4>
                <p className="about-info-name">Years experience</p>
              </div>

              <div className="about-info-item">
                <h4 className="about-info-title">10+</h4>
                <p className="about-info-name">Completed projects</p>
              </div>

              <div className="about-info-item">
                <h4 className="about-info-title">1</h4>
                <p className="about-info-name">Research paper publications</p>
              </div>
            </div>

            <div className="about-buttons">
              <a href="/cv.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download"></i> Download CV
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
