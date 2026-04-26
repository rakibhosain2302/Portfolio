import { motion } from 'framer-motion';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animationVariants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/portfolioData';
import '../styles/Blog.css';

export const Blog = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="blog-container">
        <motion.div
          className="blog-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">Insights about design and creativity</p>
        </motion.div>

        <motion.div
          className="blog-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="blog-card"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <div className="blog-image-wrapper">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="blog-category"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.category}
                </motion.div>
              </div>

              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-meta">
                  <div className="meta-item">
                    <FiCalendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <FiClock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <motion.button
                  className="read-btn"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
