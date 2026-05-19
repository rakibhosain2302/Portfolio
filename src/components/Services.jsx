import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone } from 'react-icons/fi';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animationVariants';
import { TbApiApp } from "react-icons/tb";
import { SiHeroui } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { BsFront } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../data/portfolioData';
import AuroraText from './GradientText/AuroraText';
import '../styles/Services.css';

const iconMap = {
  BsFront: BsFront,
  FaLaravel: FaLaravel,
  TbApiApp: TbApiApp,
  FiGlobe: FiGlobe,
  SiHeroui: SiHeroui,
  FiSmartphone: FiSmartphone,
};

export const Services = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h1 className='header-title mb-4'><RiServiceFill className='me-2 pop-up-icon' size={20} />Services</h1>
          <h1 className="section-title head-text">Smart Solutions <AuroraText className='auroratext'>for Growing Businesses</AuroraText></h1>
          <p className="section-subtitle text-white p-text">Modern web solutions crafted with performance, responsiveness, and user experience in mind.</p>
        </motion.div>

        <motion.div
          className="services-grid row"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <div key={service.id} className="col-md-4 mb-4 serv-mb">
                <motion.div
                  className="service-card custom-card"
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

                  <p className="service-description">
                    {service.description}
                  </p>

                  <motion.div
                    className="service-line"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                    style={{ background: service.color }}
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
