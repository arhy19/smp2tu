import '@/styles/pages/admin.css';

export default function admin() {
  return (
    <section className="admin-page">
      <h1>📂 Dashboard Tata Usaha</h1>
      <p>Selamat datang, admin. Anda berhasil login dan mengakses halaman internal instansi.</p>

      <div className="quick-links">
        <button>📑 Surat Masuk</button>
        <button>📤 Surat Keluar</button>
        <button>👥 Data Pegawai</button>
      </div>
    </section>
  );
}
