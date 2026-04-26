import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { ref, isInView } = useScrollAnimation();

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="contact-info" variants={staggerItem}>
            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <FiMail size={24} />
              <h4>Email</h4>
              <p>rakib@example.com</p>
            </motion.div>
            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <FiPhone size={24} />
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </motion.div>
            <motion.div className="info-card" whileHover={{ y: -5 }}>
              <FiMapPin size={24} />
              <h4>Location</h4>
              <p>New York, USA</p>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={staggerItem}
          >
            <motion.div className="form-group" variants={staggerItem}>
              <label htmlFor="name">Your Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={errors.name ? 'error' : ''}
                whileFocus={{ scale: 1.02 }}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </motion.div>

            <motion.div className="form-group" variants={staggerItem}>
              <label htmlFor="email">Your Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={errors.email ? 'error' : ''}
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </motion.div>

            <motion.div className="form-group full" variants={staggerItem}>
              <label htmlFor="message">Your Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                className={errors.message ? 'error' : ''}
                whileFocus={{ scale: 1.02 }}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <FiCheck size={20} /> Message Sent!
                </motion.span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
