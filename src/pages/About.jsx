import { motion } from 'framer-motion';
import '@/styles/pages/about.css';

function About() {
  return (
    <motion.section
      className="about-page container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1>Tentang Portal TU</h1>

      <div className="about-content">
        <p>
          Selamat datang di <strong>Portal Tata Usaha</strong> UPTD SMP Negeri 2 Parepare — sistem digital
          untuk transparansi data sekolah, efisiensi kerja TU, dan akses informasi publik.
        </p>

        <h3>📜 Sejarah Pengembangan</h3>
        <p>
          Portal ini mulai dikembangkan pertengahan 2025 oleh <strong>Operator Dapodik</strong> bersama <strong>Copilot</strong>,
          dan dibangun menggunakan <strong>DomReact</strong> — framework modular berbasis <strong>React</strong> dengan animasi Framer Motion dan integrasi data real-time.
        </p>

        <h3>🎯 Tujuan</h3>
        <ul>
        <p>
          <li>Mempermudah pemutakhiran data sekolah</li>
          <li>Akses publik rekap GTK, PD, rombel, alumni</li>
          <li>Desain interaktif dan modular responsif</li>
          <li>Kolaborasi manusia + AI dalam sistem digital</li>
        </p>
        </ul>

        <h3>🧩 Struktur Website</h3>
        <ul>
        <p>
          <li><strong>Beranda:</strong> Landing + navigasi cepat</li>
          <li><strong>Rekap Data:</strong> Iframe untuk GTK, PD, rombel</li>
          <li><strong>Kontak:</strong> Info TU, form, dan peta lokasi</li>
          <li><strong>Tentang:</strong> Profil & pengembangan portal</li>
        </p>
        </ul>
        
        <h3>🧠 Teknologi yang Digunakan</h3>
        <ul>
        <p>
          <li><strong>DomReact Framework:</strong> React + JSX modular</li>
          <li><strong>Framer Motion:</strong> Transisi animasi</li>
          <li><strong>EmailJS:</strong> Pengiriman formulir</li>
          <li><strong>Google Sheets + Apps Script:</strong> Rekap data otomatis</li>
        </p>
        </ul>

        <p className="footer-quote">
          Dibuat oleh <strong>TU</strong> bersama <strong>Copilot</strong> — kolaborasi manusia & AI untuk sistem yang ringan, rapi, dan cerdas 😎
        </p>
      </div>
    </motion.section>
  );
}

export default About;