import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillBarsRef = useRef([]);

  const technicalSkills = [
    { name: 'Computer Security', percentage: 75 },
    { name: 'Web Development', percentage: 80 },
    { name: 'Network Security', percentage: 70 },
    { name: 'Python', percentage: 85 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Java', percentage: 60 },
    { name: 'SIEM', percentage: 80 },
    { name: 'Log Analysis', percentage: 75 },
    { name: 'Project Management', percentage: 70 }
  ];

  const tools = [
    { name: 'Wireshark', icon: 'fas fa-ethernet' },
    { name: 'Metasploit', icon: 'fas fa-bug' },
    { name: 'Burp Suite Professional', icon: 'fas fa-spider' },
    { name: 'Nmap', icon: 'fas fa-network-wired' },
    { name: 'Kali Linux', icon: 'fab fa-linux' },
    { name: 'SIEM & Log Analysis', icon: 'fas fa-chart-line' }
  ];

  // Empty certifications array as they are yet to be completed
  // const certifications = [];

  useEffect(() => {
    if (inView && activeTab === 'technical') {
      skillBarsRef.current.forEach((bar, index) => {
        if (bar) {
          setTimeout(() => {
            bar.style.width = `${technicalSkills[index].percentage}%`;
          }, 100 * index);
        }
      });
    }
  }, [inView, activeTab, technicalSkills]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    if (tab === 'technical') {
      setTimeout(() => {
        skillBarsRef.current.forEach((bar, index) => {
          if (bar) {
            bar.style.width = `${technicalSkills[index].percentage}%`;
          }
        });
      }, 100);
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container" ref={ref}>
        <div className="section-title">
          <h2>My Skills</h2>
          <p>What I bring to the table</p>
        </div>

        <div className="skills-container">
          <div className="skills-tabs">
            <button 
              className={`skills-tab ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => handleTabChange('technical')}
            >
              <i className="fas fa-code mr-2"></i> Technical Skills
            </button>
            <button 
              className={`skills-tab ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => handleTabChange('tools')}
            >
              <i className="fas fa-tools mr-2"></i> Tools & Technologies
            </button>
            <button 
              className={`skills-tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => handleTabChange('certifications')}
            >
              <i className="fas fa-certificate mr-2"></i> Certifications
            </button>
          </div>

          <div className={`skills-content ${activeTab === 'technical' ? 'active' : ''}`}>
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-bar-container"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-bar-title">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    ref={el => skillBarsRef.current[index] = el}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={`skills-content ${activeTab === 'tools' ? 'active' : ''}`}>
            <div className="skills-grid">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView && activeTab === 'tools' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-icon">
                    <i className={tool.icon}></i>
                  </div>
                  <h3 className="skill-title">{tool.name}</h3>
                  <ul className="skill-list">
                    {tool.name === 'Wireshark' && (
                      <>
                        <li><i className="fas fa-check-circle"></i> Network traffic analysis</li>
                        <li><i className="fas fa-check-circle"></i> Protocol inspection</li>
                        <li><i className="fas fa-check-circle"></i> Security monitoring</li>
                      </>
                    )}
                    {tool.name === 'Metasploit' && (
                      <>
                        <li><i className="fas fa-check-circle"></i> Vulnerability testing</li>
                        <li><i className="fas fa-check-circle"></i> Exploitation frameworks</li>
                        <li><i className="fas fa-check-circle"></i> Security assessment</li>
                      </>
                    )}
                    {tool.name === 'Burp Suite Professional' && (
                      <>
                        <li><i className="fas fa-check-circle"></i> Web app security testing</li>
                        <li><i className="fas fa-check-circle"></i> API testing</li>
                        <li><i className="fas fa-check-circle"></i> Security scanning</li>
                      </>
                    )}
                    {tool.name === 'Nmap' && (
                      <>
                        <li><i className="fas fa-check-circle"></i> Network discovery</li>
                        <li><i className="fas fa-check-circle"></i> Port scanning</li>
                        <li><i className="fas fa-check-circle"></i> Service enumeration</li>
                      </>
                    )}
                    {tool.name === 'Kali Linux' && (
                      <>
                        <li><i className="fas fa-check-circle"></i> Security toolset</li>
                        <li><i className="fas fa-check-circle"></i> Penetration testing</li>
                        <li><i className="fas fa-check-circle"></i> Security research</li>
                      </>
                    )}
                    {tool.name === 'SIEM & Log Analysis' && (
                      <>
                        <li><i className="fas fa-check-circle"></i> Developed LogSentry platform</li>
                        <li><i className="fas fa-check-circle"></i> Real-time threat detection</li>
                        <li><i className="fas fa-check-circle"></i> Custom correlation rules</li>
                      </>
                    )}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={`skills-content ${activeTab === 'certifications' ? 'active' : ''}`}>
            <motion.div 
              className="certifications-message"
              initial={{ opacity: 0, y: 20 }}
              animate={inView && activeTab === 'certifications' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="cert-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="cert-title">Certifications In Progress</h3>
              <p className="cert-description">
                I am currently enhancing my skills through platforms like TryHackMe and preparing for industry-recognized certifications.
              </p>
              <div className="cert-learning">
                <div className="learning-platform">
                  <i className="fas fa-laptop-code"></i>
                  <h4>TryHackMe</h4>
                  <p>Actively completing cybersecurity learning paths</p>
                </div>
                <div className="learning-platform">
                  <i className="fas fa-certificate"></i>
                  <h4>Upcoming Certifications</h4>
                  <p>Preparing for professional cybersecurity certifications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
