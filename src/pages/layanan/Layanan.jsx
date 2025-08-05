import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './layanan.css';

const cardData = [
  {
    title: 'Mutasi Siswa',
    description: 'Siswa Pindah Masuk & Keluar',
    alt: 'mutasi',
    /*link: '/mutasi',*/
  },
  {
    title: 'Usulan PIP',
    description: 'Bantuan Dana Pendidikan Untuk Peserta Didik',
    alt: 'Beasiswa',
    /*link: '/pip',*/
  },
  {
    title: 'Lapor Dapodik',
    description: 'Perbaikan Data DAPODIK',
    alt: 'dapodik',
    /*link: '/sarpras',*/
  },
  {
    title: 'LAINNYA',
    description: 'Layanan lainnya.',
    alt: 'layanan',
    /*link: '/lainnya',*/
  },
];

function Layanan() {
  return (
    <motion.section
      className="publik-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
   

      <div className="card">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 + index * 0.2 }}
          >
            <Link to={card.link} className="card-link">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </Link>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Layanan;
