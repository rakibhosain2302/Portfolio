import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioItems } from '../data/portfolioData';
import '../styles/Portfolio.css';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const { ref, isInView } = useScrollAnimation();

  const categories = ['All', 'Design', 'Web', 'App', 'Branding'];
  const filtered = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Explore some of my recent projects</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          layout
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              variants={staggerItem}
              layoutId={`card-${project.id}`}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio-image-wrapper">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="portfolio-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={24} />
                  </motion.button>
                </motion.div>
              </div>

              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
