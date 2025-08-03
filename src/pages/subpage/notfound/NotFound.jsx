import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

export default function NotFound() {
  return (
    <motion.div
      className="notfound-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1 className="notfound-title" initial={{ y: -32 }} animate={{ y: 0 }}>
        🚧 404
      </motion.h1>
      <p className="notfound-message">
        Waduh! Halaman yang kamu cari tidak ditemukan.<br />
        Mungkin link-nya typo, atau sedang dibangun.
      </p>
      <Link to="/beranda" className="back-home-button">
        Beranda
      </Link>
    </motion.div>
  );
}
