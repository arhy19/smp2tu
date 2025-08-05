import { Link } from 'react-router-dom';
//import './dashboardadmin.css';

export default function admin() {
  return (
    <section className="admin-page">
      <h1>📂 Dashboard TU</h1>
      <p>Selamat datang. Anda berhasil login dan mengakses halaman internal instansi.</p>

      <div className="quick-links">
        <button><Link to="/RegSurat">📤 Ambil Nomor Surat </Link></button>
        <button>👥 Data Pegawai</button>

        
          
        

      </div>
    </section>
  );
}
