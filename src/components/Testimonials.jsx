import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials } from '../data/portfolioData';
import '../styles/Testimonials.css';

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const slideVariants = {
    enter: { opacity: 0, x: 1000 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -1000 }
  };

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What clients say about me</p>
        </motion.div>

        <motion.div
          className="testimonials-slider"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.5 }}
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonials[current].name}</h4>
                    <p className="testimonial-role">{testimonials[current].role}</p>
                  </div>
                </div>

                <p className="testimonial-message">"{testimonials[current].message}"</p>

                <div className="testimonial-stars">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FiStar key={i} size={16} className="star" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-controls">
            <motion.button
              className="slider-btn prev"
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft size={24} />
            </motion.button>
            <motion.button
              className="slider-btn next"
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>

          <motion.div className="slider-indicators" variants={staggerContainer}>
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${current === index ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                variants={staggerItem}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
