import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import '@/styles/layout/container.css';
import '@/styles/components/hero.css';
import '@/styles/components/card.css';
import '@/styles/pages/landing.css';
import '@/styles/base/animations.css';

export default function Home() {
  const isAuth = useAuth(); // Cek status login

  const cardItems = [
    {
      icon: '🌐',
      title: 'Akses Publik',
      desc: 'Informasi Publik seputar data sekolah dan layanan TU.',
      link: '/Publik',
      label: 'Lihat Halaman',
    },
    {
      icon: isAuth ? '✅' : '🔒',
      title: 'Akses Penuh',
      desc: 'Akses data kepala sekolah, guru, dan fitur surat resmi.',
      link: isAuth ? '/Admin' : '/Login',
      label: isAuth ? 'Masuk' : 'Login',
    },
    {
      icon: '👥',
      title: 'Tentang Kami',
      desc: 'Profil tata usaha dan visi portal pelayanan sekolah.',
      link: '/About',
      label: 'Lihat Halaman',
    },
  ];

  return (
    <main className="landing-page">
      
      {/* ✨ Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <ul className="hero-description-list">
            <li>
              <img src="/images/logo.png" alt="Logo" className="hero-logo" />
            </li>
            <li>
              <h5 className="hero-title">📘 Portal Tata Usaha</h5>
            </li>
            <li>
              <h1 className="hero-subtitle">Sistem Informasi Tata Usaha Sekolah</h1>
            </li>
          </ul>
        </div>
      </section>

      {/* 🔗 Navigasi Fitur */}
      <section className="container card-grid">
        {cardItems.map((card, index) => (
          <motion.div
            key={index}
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{card.icon} {card.title}</h3>
            <p>{card.desc}</p>
            <a href={card.link} className="cta-button">
              {card.label}
            </a>
          </motion.div>
        ))}
      </section>
    </main>
  );
}