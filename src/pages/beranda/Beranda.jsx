// pages/Beranda.jsx
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import './beranda.css';

export default function Home() {
  const isAuth = useAuth();

  const cardItems = [
    {
      icon: '🌐',
      title: 'Akses Publik',
      desc: 'Informasi seputar data sekolah, layanan Tata Usaha dan Rekap Data',
      link: 'dashboardpublik',
      label: 'Lihat Halaman',
    },
    {
      icon: isAuth ? '✅' : '🔒',
      title: 'Akses Internal',
      desc: 'Akses data GTK, PTK, Murid, dan fitur surat resmi.',
      link: isAuth ? 'dashboardadmin' : 'login',
      label: isAuth ? 'Dashboard' : 'Login',
    },
    {
      icon: '👥',
      title: 'Tentang Kami',
      desc: 'Profil tata usaha dan visi portal pelayanan sekolah.',
      link: 'about',
      label: 'Lihat Halaman',
    },
  ];

  return (
    <main className="beranda-main">
      <section className="beranda-section-text">
         <Link to="/" className="logo-link" aria-label="Go to homepage">
              <img src="/images/logo.png" alt="Logo" className="logo-m" />
         </Link>

        <h5 className="beranda-title">📘 Portal TU</h5>
        <h1 className="beranda-subtitle">Sistem Informasi Tata Usaha Sekolah</h1>
      </section>

      <section className="beranda-section-card">
        <div className="card">
           {cardItems.map((card, index) => (
          
          <article key={index} className="feature-card">

            <div className="card-title">
             {card.icon} {card.title}
            </div>

            <div className="card-description">
              {card.desc}
            </div>

             <Link to={`/${card.link}`} className="cta-button">
                {card.label}
             </Link>

          </article>

           ))}
        </div>

      </section>
    </main>

  );
}
