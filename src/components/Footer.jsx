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
    <footer className="footer ultra-footer">
      <motion.div
        className="footer-content glass-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Logo & Tagline */}
        <motion.div className="footer-main" variants={staggerItem}>
          <h3 className="footer-logo neon-text">Ra<span className="gradient-text">k</span>ib</h3>
          <p className="footer-tagline">✨ Crafting Ultra Digital Experiences ✨</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div className="footer-links" variants={staggerContainer}>
          {["Home", "About", "Portfolio", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              variants={staggerItem}
              whileHover={{ x: 8, color: "#00f5ff" }}
              className="footer-link"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div className="social-links" variants={staggerContainer}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                className="social-link neon-icon"
                variants={staggerItem}
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <Icon size={22} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="footer-copy">&copy; {currentYear} Rakib. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};
