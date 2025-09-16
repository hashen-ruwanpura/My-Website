import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const typedRef = useRef(null);
  const commandRef = useRef(null);
  const outputRef = useRef(null);
  const [terminalState, setTerminalState] = useState(1);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Cybersecurity Graduate',
        'Web and Mobile Application Developer',
        'Security Researcher',
        'Python Developer'
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    let commandTyped = null;
    
    const setupTerminalTyping = () => {
      // First destroy any existing instance
      if (commandTyped) {
        commandTyped.destroy();
      }

      const commands = [
        { text: 'whoami', output: 'Hashen Ruwanpura - Computer Security Professional' },
        { text: 'cat skills.txt', output: 'Web Security | Computer Security | Network Security | Python Developer | Web and Mobile Development' },
        { text: 'status', output: 'First Class Honors BSc. in Computer Security By University of Plymouth' },
        { text: 'cd projects && ls', output: 'Comprehensive Log Analyzing Tools/  Website and Mobile Application Development/  Research Paper Publications/  SecTools/' }
      ];
      
      // Get the current command based on terminal state
      const currentCommand = commands[(terminalState - 1) % commands.length];
      
      // Type the command
      commandTyped = new Typed(commandRef.current, {
        strings: [currentCommand.text],
        typeSpeed: 45,  // Further reduced to 45 for better readability with longer content
        showCursor: true,
        cursorChar: '▋',
        onComplete: () => {
          // After command is typed, show output after a delay
          setTimeout(() => {
            setShowOutput(true);
            outputRef.current.innerHTML = currentCommand.output;
            outputRef.current.style.opacity = 1;
            
            // Set up the next command after a delay (increased for longer display due to longer text)
            setTimeout(() => {
              setShowOutput(false);
              setTimeout(() => {
                setTerminalState(prev => prev + 1);
              }, 1000); // Increased to 1000ms for smoother transitions with longer content
            }, 6000);   // Increased to 6000ms (6 seconds) to give more time to read longer content
          }, 800);      // Increased to 800ms for a more natural typing delay before showing output
        }
      });
    };

    setupTerminalTyping();

    return () => {
      if (commandTyped) {
        commandTyped.destroy();
      }
    };
  }, [terminalState]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="home">
      <div className="container home-container">
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="home-subtitle">
            Hello There
          </motion.p>
          <motion.h1 variants={itemVariants} className="home-title">
            I'm <span>Hashen</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="home-description">
            A passionate <span ref={typedRef}></span>
          </motion.p>
          <motion.div variants={itemVariants} className="home-buttons">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="terminal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">hashen@cybersec:~</div>
          </div>
          <div className="terminal-content">
            <div className="terminal-session">
              <div className="terminal-line">
                <span className="terminal-prompt">hashen@cybersec:~$</span>
                <span ref={commandRef} className="terminal-command"></span>
              </div>
              <div className={`terminal-output ${showOutput ? 'show' : ''}`}>
                <span ref={outputRef}></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="home-social">
        <a href="https://linkedin.com/in/hashen-ruwanpura-9813aa28a" className="home-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/hashen-ruwanpura" className="home-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/HashenRuwanpur3" className="home-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/hashen.ruwanpura?igsh=dzgzbWhoaXhvN2V6&utm_source=qr" className="home-social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="scroll-down">
        <span>Scroll Down</span>
        <div className="scroll-down-arrow"></div>
      </div>

      <div className="home-shape"></div>
    </section>
  );
};

export default Home;
