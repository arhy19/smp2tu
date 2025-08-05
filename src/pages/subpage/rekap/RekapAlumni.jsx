import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RekapNav from './RekapNav';
import './rekap.css';

function RekapAlumni() {
  return (
    <section className="rekap-page">
      <RekapNav />

      <motion.div
        className="rekap-main"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

     <h2 className="rekap-title">Data Alumni</h2>

      <div className="rekap-frame aspect-siswa">
        {/*<iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE67Gu-o-eZnme2NxYHI6Wb8SbUM3zT1gDUFzfD-jpEUOKiXltcarLJD583ABzjb8kSa-Ej0xEFhzJ/pubhtml?gid=225294947&single=true&widget=true&headers=false&range=A1:D8"
          title="Rekap Siswa A1:D8"
          loading="lazy"
        ></iframe>*/}
      </div>

      <div className="rekap-frame aspect-siswa">
        {/*<iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE67Gu-o-eZnme2NxYHI6Wb8SbUM3zT1gDUFzfD-jpEUOKiXltcarLJD583ABzjb8kSa-Ej0xEFhzJ/pubhtml?gid=1402319197&single=true&widget=true&headers=false&range=A1:I33"
          title="Rekap Siswa A1:I33"
          loading="lazy"
        ></iframe>*/}
      </div>

      <div className="rekap-info">
        <span>📊 <strong>Rekap Otomatis</strong></span><br />
        Informasi ini diolah menggunakan sistem rekap berbasis <strong>Google Sheets</strong> dan <strong>Apps Script</strong>.
      </div>

        </motion.div>
    </section>
  );
}


export default RekapAlumni;
