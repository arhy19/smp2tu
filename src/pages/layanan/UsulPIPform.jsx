import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './usulpip.css';

const UsulPIPform = () => {
  return (
    <motion.div
      className="usulpip-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="usulpip-title">Pendataan Usul PIP Fase 1</h2>
      <p className="usulpip-description">
        Silakan isi formulir berikut untuk mengusulkan Program Indonesia Pintar (PIP) Fase 1.
      </p>

      <div className="usulpip-iframe-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfmY-h4JaU6-Z93_85YmrajaCMUNUc_XvAILP19i-VdEGJpAQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Formulir Usul PIP"
        >
          Jika formulir tidak muncul, silakan buka langsung di{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfmY-h4JaU6-Z93_85YmrajaCMUNUc_XvAILP19i-VdEGJpAQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            tautan ini
          </a>.
        </iframe>
      </div>

      <div className="usulpip-backlink">
        <Link to="/">← Kembali ke Beranda</Link>
      </div>
    </motion.div>
  );
};

export default UsulPIPform;