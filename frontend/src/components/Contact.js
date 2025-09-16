import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('h7Q1UNYxMdB6yzNCc');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS configuration with your actual keys
    const serviceId = 'service_wluslqc';
    const templateId = 'template_03hwzki';
    
    try {
      console.log('Attempting to send email with:', { serviceId, templateId });
      
      // Try using sendForm method instead
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current);
      
      console.log('EmailJS result:', result);
      
      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Your message has been sent successfully! Thank you for reaching out.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Detailed error:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      
      // Try alternative method if sendForm fails
      try {
        console.log('Trying alternative send method...');
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Hashen Ruwanpura',
        };
        
        const result = await emailjs.send(serviceId, templateId, templateParams);
        
        if (result.status === 200) {
          setSubmitStatus({
            type: 'success',
            message: 'Your message has been sent successfully! Thank you for reaching out.'
          });
          
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          return;
        }
      } catch (secondError) {
        console.error('Second attempt failed:', secondError);
      }
      
      setSubmitStatus({
        type: 'error',
        message: `Failed to send message: ${error.text || error.message || 'Please check your EmailJS configuration'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" ref={ref}>
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Let's connect and discuss how we can work together</p>
        </div>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p><a href="mailto:hashr.work@gmail.com">hashr.work@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a 
                    href="https://github.com/hashenruwanpura" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link social-link-github"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://linkedin.com/in/hashenruwanpura" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link social-link-linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="mailto:hashen@example.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link social-link-twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            {submitStatus && (
              <div className={`${submitStatus.type}-message`}>
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="from_name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="from_name"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {formErrors.name && <span className="field-error">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="from_email">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="from_email"
                  name="from_email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {formErrors.email && <span className="field-error">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                {formErrors.subject && <span className="field-error">{formErrors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                {formErrors.message && <span className="field-error">{formErrors.message}</span>}
              </div>

              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
