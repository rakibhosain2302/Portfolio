import { motion } from 'framer-motion';
import { FiPenTool, FiGlobe, FiSmartphone, FiAward } from 'react-icons/fi';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../data/portfolioData';
import '../styles/Services.css';

const iconMap = {
  FiPenTool: FiPenTool,
  FiGlobe: FiGlobe,
  FiSmartphone: FiSmartphone,
  FiAward: FiAward
};

export const Services = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className="service-card"
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="service-icon"
                  style={{ background: `${service.color}15`, color: service.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={32} />
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <motion.div
                  className="service-line"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  style={{ background: service.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
