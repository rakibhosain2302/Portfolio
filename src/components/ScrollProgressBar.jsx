import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollAnimation';
import '../styles/ScrollProgressBar.css';

export const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  );
};
