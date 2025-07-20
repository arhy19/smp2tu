// pages/Siswa.jsx

import { motion } from 'framer-motion';
import '@/styles/pages/rekap.css';

function Siswa() {
  return (
    <motion.section
      className="projects-section container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
<h2 className="rekap-title">Peserta Didik</h2>

<div className="rekap-frame aspect-siswa">
  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE67Gu-o-eZnme2NxYHI6Wb8SbUM3zT1gDUFzfD-jpEUOKiXltcarLJD583ABzjb8kSa-Ej0xEFhzJ/pubhtml?gid=225294947&single=true&widget=true&headers=false&range=A1:D8"
    title="Rekap Siswa A1:D8"
    loading="lazy"
  ></iframe>
</div>

<div className="rekap-frame aspect-siswa">
  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE67Gu-o-eZnme2NxYHI6Wb8SbUM3zT1gDUFzfD-jpEUOKiXltcarLJD583ABzjb8kSa-Ej0xEFhzJ/pubhtml?gid=1402319197&single=true&widget=true&headers=false&range=A1:I33"
    title="Rekap Siswa A1:I33"
    loading="lazy"
  ></iframe>
</div>

        
<div
  style={{
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#c2d1df',
    textAlign: 'left',
    margin: '2rem auto 1rem',
    lineHeight: 1.6,
    maxWidth: '680px',
    paddingLeft: '0.5rem',
    borderLeft: '3px solid #2196f3',
  }}
>
  <span style={{ display: 'inline-block', marginBottom: '0.6rem' }}>📊 <strong>Rekap Otomatis</strong></span><br />
  Informasi ini diolah menggunakan sistem rekap berbasis <strong>Google Sheets</strong> dan <strong>Apps Script</strong>.<br />
  Disusun dan dipelihara oleh <strong style={{ color: '#0ec9ff' }}>🧐Operator Dapodik Sekolah</strong> bersama <strong style={{ color: '#0ec9ff' }}>
🤖Bro AI (Copilot)</strong> <br />
  asisten virtual yang membantu merapikan data, menghemat waktu, dan menjaga akurasi. 💡
</div>
      
    </motion.section>
  );
}

export default Siswa;