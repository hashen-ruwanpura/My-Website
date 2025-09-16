import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: "LogSentry - SIEM Tool",
      description: "A comprehensive SIEM solution that provides advanced log analysis and threat detection capabilities for enterprise environments. Designed to detect suspicious activities and security threats in real-time.",
      technologies: ["Python", "ElasticSearch", "Kibana", "Machine Learning"],
      githubLink: "https://github.com/hashenruwanpura/LogSentry-PUSL3190.git",
      demoLink: "",
      features: [
        "Real-time log ingestion and analysis",
        "Machine learning-based anomaly detection",
        "Customizable alert rules and notifications",
        "Interactive dashboard for security monitoring"
      ]
    },
    {
      id: 2,
      title: "Network Vulnerability Scanner",
      description: "An automated security tool that scans networks for potential vulnerabilities, misconfigurations, and security issues. Generates comprehensive reports with remediation recommendations. (Repository is set to private)",
      technologies: ["Python", "Nmap", "Docker", "PostgreSQL"],
      githubLink: "https://github.com/isira-adithya/PUSL3130.git",
      demoLink: "",
      features: [
        "Comprehensive port scanning and service detection",
        "Vulnerability assessment against known CVEs",
        "Secure configuration analysis",
        "Detailed reporting with risk prioritization"
      ]
    },
    {
      id: 3,
      title: "Secure Web Application Framework",
      description: "A security-focused web application framework with built-in protections against common vulnerabilities like XSS, CSRF, SQL injection, and more.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/isira-adithya/PUSL2024.git",
      demoLink: "",
      features: [
        "Input validation and sanitization",
        "Authentication and authorization controls",
        "API security best practices",
        "Security headers and CSP implementation"
      ]
    },
    {
      id: 4,
      title: "Local Event Discovery Website",
      description: "A comprehensive platform for discovering and promoting local events, enabling users to find, create, and manage events in their community.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/isira-adithya/PUSL2021-ComputingGroupProject.git",
      demoLink: "",
      features: [
        "Interactive event search and filtering",
        "User authentication and profiles",
        "Event creation and management",
        "Reviews and ratings system"
      ]
    },
    {
      id: 5,
      title: "Point of Sales System (POS)",
      description: "A comprehensive Point of Sales system designed for retail businesses to streamline transactions, inventory management, and sales reporting.",
      technologies: ["C#", ".NET", "SQL Server", "WPF"],
      githubLink: "https://github.com/isira-adithya/CS107.3-Assignment.git",
      demoLink: "",
      features: [
        "Real-time transaction processing",
        "Inventory tracking and management",
        "Sales analytics and reporting",
        "User role-based access control"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Some of my recent cybersecurity work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-feature">
                  <h4>Key Features</h4>
                  <ul className="feature-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github-link"
                    >
                      <i className="fab fa-github"></i> View Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link demo-link"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-more-container">
          <a 
            href="https://github.com/hashenruwanpura" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-more-btn"
          >
            View More Projects <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
