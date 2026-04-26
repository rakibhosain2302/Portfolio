import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/About.css';

const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start > target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <div ref={ref} className="counter-value">{count}+</div>;
};

export const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { value: 50, label: 'Projects Completed' },
    { value: 30, label: 'Happy Clients' },
    { value: 3, label: 'Years Experience' }
  ];

  const skills = ['UI Design', 'UX Research', 'Prototyping', 'Figma', 'Web Design', 'Mobile Design', 'Branding', 'Design Systems'];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my journey and expertise</p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="stat-card" variants={staggerItem}>
              <Counter target={stat.value} />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="about-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="about-text" variants={staggerItem}>
            <h3>Professional Journey</h3>
            <p>
              I'm a passionate product designer with a deep commitment to creating meaningful digital experiences. 
              My background combines strategic thinking with creative problem-solving, allowing me to design solutions 
              that are both beautiful and functional.
            </p>
            <p>
              Throughout my career, I've worked with startups and established brands, helping them elevate their digital 
              presence through thoughtful design and user-centered approach.
            </p>
          </motion.div>

          <motion.div className="skills-section" variants={staggerItem}>
            <h3>Skills & Expertise</h3>
            <motion.div className="skills-grid" variants={staggerContainer}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag"
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
