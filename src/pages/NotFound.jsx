// pages/NotFound.jsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.div
      className="notfound-page container text-center"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -32 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="title-glow">404 — Halaman Tidak Ditemukan</h1>
      <p className="subtitle">Sepertinya kamu nyasar di dimensi yang belum dirancang 🌌</p>
      <Link to="/" className="cta-button">Kembali ke Beranda</Link>
    </motion.div>
  );
}

export default NotFound;
