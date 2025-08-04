import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './rekap.css';

function RekapGTK() {
  return (
    <motion.section
      className="rekap-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="rekap-title">Data Pendidik & Tenaga Kependidikan</h2>

      <div className="rekap-frame aspect-gtk">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE67Gu-o-eZnme2NxYHI6Wb8SbUM3zT1gDUFzfD-jpEUOKiXltcarLJD583ABzjb8kSa-Ej0xEFhzJ/pubhtml?gid=636812545&single=true&widget=true&headers=false&range=A2:D10"
          title="Rekap GTK A2:D10"
          loading="lazy"
        ></iframe>
      </div>

      <div className="rekap-frame aspect-gtk">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE67Gu-o-eZnme2NxYHI6Wb8SbUM3zT1gDUFzfD-jpEUOKiXltcarLJD583ABzjb8kSa-Ej0xEFhzJ/pubhtml?gid=636812545&single=true&widget=true&headers=false&range=F4:I14"
          title="Rekap GTK F4:I14"
          loading="lazy"
        ></iframe>
      </div>

      <div className="rekap-info">
        <span>📊 <strong>Rekap Otomatis</strong></span><br />
        Informasi ini diolah menggunakan sistem rekap berbasis <strong>Google Sheets</strong> dan <strong>Apps Script</strong>.
      </div>

      <Link to="/dashboardpublik" className="rekap-button">
        lihat data lainnya
      </Link>
    </motion.section>
  );
}

export default RekapGTK;
