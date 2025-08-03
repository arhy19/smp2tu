import './dashboardadmin.css';

export default function admin() {
  return (
    <section className="admin-page">
      <h1>📂 Dashboard TU</h1>
      <p>Selamat datang. Anda berhasil login dan mengakses halaman internal instansi.</p>

      <div className="quick-links">
        <button>📤 Ambil Nomor Surat </button>
        <button>👥 Data Pegawai</button>
      </div>
    </section>
  );
}
