import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animationVariants';
import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FiTwitter, link: '#', label: 'Twitter' },
    { icon: FiLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FiGithub, link: '#', label: 'GitHub' },
    { icon: FiMail, link: '#', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="footer-main" variants={staggerItem}>
          <h3 className="footer-logo">Ra<span className="gradient-text">k</span>ib</h3>
          <p className="footer-tagline">Creating beautiful digital experiences</p>
        </motion.div>

        <motion.div className="footer-links" variants={staggerContainer}>
          <motion.a href="#home" variants={staggerItem} whileHover={{ x: 5 }}>Home</motion.a>
          <motion.a href="#about" variants={staggerItem} whileHover={{ x: 5 }}>About</motion.a>
          <motion.a href="#portfolio" variants={staggerItem} whileHover={{ x: 5 }}>Portfolio</motion.a>
          <motion.a href="#contact" variants={staggerItem} whileHover={{ x: 5 }}>Contact</motion.a>
        </motion.div>

        <motion.div className="social-links" variants={staggerContainer}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                className="social-link"
                variants={staggerItem}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; {currentYear} Rakib. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};
