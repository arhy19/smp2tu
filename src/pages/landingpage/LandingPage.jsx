import { Link } from 'react-router-dom';
import './landingpage.css';

export default function LandingPage() {
  return (
    <section className="landing-page">
      <h1>Selamat Datang di Portal TU</h1>
      <p>
        Portal ini menyediakan layanan administrasi sekolah secara online untuk
        warga UPTD SMP Negeri 2 Parepare.
      </p>

      <Link to="/Beranda" className="landing-cta-button">
        Mulai
      </Link>
    </section>
  );
}
