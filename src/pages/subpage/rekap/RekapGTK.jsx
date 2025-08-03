import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './rekap.css';

function GTK() {
  return (
    <motion.section
      className="projects-section container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
<h2 className="rekap-title">GTK / PTK</h2>

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


<div style={{
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#666',
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

<div>
      <Link to="/dashboardadmin" className="rekap-button">
        lihat data lainnya
      </Link>
</div>  

  </div>


      
    </motion.section>
  );
}

export default GTK;