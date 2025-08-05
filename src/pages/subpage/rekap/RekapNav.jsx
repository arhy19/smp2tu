// SidebarNav.jsx
import { Link } from 'react-router-dom';
import './rekapnav.css';

function RekapNav() {
  return (
    <aside className="rekap-aside">
      <nav className="rekap-nav">
        <h3>📁 Galeri Data</h3>
        <ul>
          <li><Link to="/RekapGTK">Rekap GTK</Link></li>
          <li><Link to="/RekapSiswa">Rekap Siswa Aktif</Link></li>
          <li><Link to="/RekapSarpras">Sarana & Prasarana</Link></li>
          <li><Link to="/rekapalumni">Rekap Alumni</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default RekapNav;
