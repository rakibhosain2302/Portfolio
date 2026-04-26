import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { fadeInUp, fadeInDown, scaleIn } from '../utils/animationVariants';
import '../styles/Hero.css';

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.span
            className="hero-subtitle"
            variants={fadeInDown}
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            className="hero-title"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            I'm a <span className="gradient-text">Product Designer</span>
            <br />& UI/UX Specialist
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Creating beautiful, functional designs that solve real problems and delight users. 
            With 3+ years of experience in digital design and product strategy.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <FiArrowRight />
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <motion.div
              className="floating-card"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Profile"
              />
            </motion.div>
            <motion.div
              className="glow-circle"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </section>
  );
};
