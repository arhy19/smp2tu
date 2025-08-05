import { Link } from 'react-router-dom';
import { useState } from 'react';
import './dashboardadmin.css';
import RegSurat from './RegSurat';

export default function DashboardAdmin() {
  const [showPopup, setShowPopup] = useState(false);

  const quickLinks = [
    { path: '/DataPegawai', label: '👥 Data Pegawai' },
  ];

  return (
    <section className="admin-page">
      <h1>📂 Dashboard TU</h1>
      <p>Selamat datang. Anda berhasil login dan mengakses halaman internal instansi.</p>

      <div className="quick-links">
        <button onClick={() => setShowPopup(true)}>📤 Ambil Nomor Surat</button>
        {quickLinks.map(({ path, label }) => (
          <Link key={path} to={path} className="quick-link-button">
            {label}
          </Link>
        ))}
      </div>

      {/* Modal Popup */}
      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <RegSurat />
            <button onClick={() => setShowPopup(false)}>❌ Tutup</button>
          </div>
        </div>
      )}
    </section>
  );
}
