import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { designSteps } from '../data/portfolioData';
import '../styles/DesignProcess.css';

export const DesignProcess = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="process" className="design-process" ref={ref}>
      <div className="process-container">
        <motion.div
          className="process-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">Design Process</h2>
          <p className="section-subtitle">How I approach every project</p>
        </motion.div>

        <motion.div
          className="timeline"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {designSteps.map((stepData, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={staggerItem}
            >
              <motion.div
                className="timeline-marker"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="step-number">{stepData.step}</span>
              </motion.div>

              <motion.div className="timeline-content">
                <h3 className="step-title">{stepData.title}</h3>
                <p className="step-description">{stepData.description}</p>
              </motion.div>

              {index < designSteps.length - 1 && (
                <motion.div
                  className="timeline-line"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
