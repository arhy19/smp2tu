// pages/Publik.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '@/styles/pages/publik.css';
import '@/styles/components/card.css';

const cardData = [
  {
    title: 'GTK/PTK',
    description: 'Rekap Guru dan Pegawai',
    image: 'images/guru.png',
    alt: 'GTK/PTK',
    link: '/gtk',
  },
  {
    title: 'PESERTA DIDIK',
    description: 'Rekap Peserta Didik Aktif',
    image: '/images/siswa.png',
    alt: 'Peserta Didik',
    link: '/siswa',
  },
  {
    title: 'SARPRAS',
    description: 'Data sarana & Prasarana',
    image: '/images/rombel.png',
    alt: 'Sarpras',
    link: '/sarpras',
  },
  {
    title: 'ALUMNI',
    description: 'Beranda Alumni.',
    image: '/images/alumni.png',
    alt: 'Alumni',
    link: '/alumni',
  },
];

function Projects() {
  return (
    <motion.section
      className="projects-section container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="projects-title">Data Individu Sekolah</h2>
  
  <div class="info-grid">
  <div class="label">Nama Sekolah</div><div class="value">: UPTD SMP Negeri 2 Parepare</div>
  <div class="label">NPSN</div><div class="value">: 40307681</div>
  <div class="label">Status Sekolah</div><div class="value">: Negeri</div>
  <div class="label">Akreditasi</div><div class="value">: A</div>
  <div class="label">Alamat</div><div class="value">: Jl.Lahalede no.84, Kel. Ujung Lare, Kec. Soreang</div>
  <div class="label"></div><div class="value">: Kota Parepare, Prov. Sulawesi Selatan</div>
  <div class="label">SK Pendirian Sekolah</div><div class="value">: 187/KEP/III/60</div>
  <div class="label">Tanggal SK Pendirian</div><div class="value">: 25 Mei 1960</div>
  <div class="label">Status Kepemilikan</div><div class="value">: Pemerintah Pusat</div>
</div>

      <div className="card-grid">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 + index * 0.2 }}
          >
            <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={card.image} alt={card.alt} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
