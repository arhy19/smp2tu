import { motion } from 'framer-motion';
import './about.css';

function About() {
  return (
    <motion.section
      className="about-page container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
     <h1>- Tentang Website -</h1>

      <div className="about-content">
        <p>
          Portal digital
          untuk transparansi data sekolah, efisiensi kerja TU, dan akses informasi publik.
        </p>

        <h3>📜 Sejarah Pengembangan</h3>
        <p>
          Website ini mulai dikembangkan pertengahan 2025 oleh <strong>Staf TU</strong> dengan dukungan <strong>AI</strong>,
          dibangun menggunakan <strong>DomReact</strong> — framework modular berbasis <strong>React</strong> dengan animasi Framer Motion dan integrasi data real-time.
        </p>

        <h3>🎯 Tujuan</h3>
        <ul>
        <p>
          <li>Mempermudah akses informasi Data Sekolah bagi Masyarakat dan Pemangku Kepentingan</li>
          <li>Membantu tugas Administrasi bagi Pendidik dan Tenaga Kependidikan</li>
          <li>Kolaborasi manusia + AI dalam sistem digital</li>
        </p>
        </ul>

        <h3>🧩 Struktur Website</h3>
        <ul>
        <p>
          <li><strong>Beranda:</strong> Landing + navigasi cepat</li>
          <li><strong>Dashboard Admin:</strong> Akses Khusus Pihak Internal Sekolah</li>
          <li><strong>Dashboard Publik:</strong></li>
          <ul><strong>Rekap Data:</strong> Iframe Rekap Data GTK, PD, rombel, dll.</ul>
          <ul><strong>Jenis Layanan:</strong> Informasi tentang layanan Administrasi</ul>
          <ul><strong>Kontak:</strong> Kontak TU, Kontak Developer, dan peta lokasi</ul>
          <ul><strong>Tentang:</strong> Profil & pengembangan portal</ul>

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