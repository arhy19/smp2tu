import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './pagewrapper.css';

export default function PageWrapper({ variant = 'full', children }) {
  const classMap = {
    full: 'page-wrapper full',
    minimal: 'page-wrapper minimal',
  };

  return (
    <motion.div
      className={classMap[variant]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

PageWrapper.propTypes = {
  variant: PropTypes.oneOf(['full', 'minimal']),
  children: PropTypes.node.isRequired,
};
