import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './dashboardpublik.css';

const cardData = [
  {
    title: 'GTK/PTK',
    description: 'Rekap Guru dan Pegawai',
    image: 'images/guru.png',
    alt: 'GTK/PTK',
    link: '/rekapgtk',
  },
  {
    title: 'PESERTA DIDIK',
    description: 'Rekap Peserta Didik Aktif',
    image: '/images/siswa.png',
    alt: 'Peserta Didik',
    link: '/rekapsiswa',
  },
  {
    title: 'SARPRAS',
    description: 'Data sarana & Prasarana',
    image: '/images/rombel.png',
    alt: 'Sarpras',
    /*link: '/sarpras',*/
  },
  {
    title: 'ALUMNI',
    description: 'Beranda Alumni.',
    image: '/images/alumni.png',
    alt: 'Alumni',
    /*link: '/alumni',*/
  },
];

function DashboardPublik() {
  return (
    <motion.section
      className="publik-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2>Data Individu Sekolah</h2>
  
  <div className="info-block">
  <div className="label">Nama Sekolah</div><div className="value">: UPTD SMP Negeri 2 Parepare</div>
  <div className="label">NPSN</div><div className="value">: 40307681</div>
  <div className="label">Status Sekolah</div><div className="value">: Negeri</div>
  <div className="label">Akreditasi</div><div className="value">: A</div>
  <div className="label">Alamat</div><div className="value">: Jl.Lahalede no.84, Kel. Ujung Lare, Kec. Soreang</div>
  <div className="label"></div><div className="value">: Kota Parepare, Prov. Sulawesi Selatan</div>
  <div className="label">SK Pendirian Sekolah</div><div className="value">: 187/KEP/III/60</div>
  <div className="label">Tanggal SK Pendirian</div><div className="value">: 25 Mei 1960</div>
  <div className="label">Status Kepemilikan</div><div className="value">: Pemerintah Pusat</div>
</div>

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
              <img src={card.image} alt={card.alt} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </Link>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default DashboardPublik;
