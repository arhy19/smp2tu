import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import ContactMethod from './ContactMethod';
import './kontak.css';

function Kontak() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_portal',
        'template_i3mpo15',
        formRef.current,
        'AQ7FYi5BjaPgIOvQf'
      )
      .then(() => {
        alert('✅ Pesan dikirim! Akan direspon jika diperlukan.');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('❌ Gagal mengirim pesan.');
      });
  };

  return (
    <motion.section
      className="contact-section container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-grid">
  {/* 🧭 Kontak TU di sebelah kiri */}
  <div className="contact-card info-card">
    <h2>Kontak TU</h2>

<div className="info-item">
      <div className="label-kontak">Email:</div>
      <div className="value-kontak">-</div>
</div>

<div className="info-item">
      <div className="label-kontak">WhatsApp TU:</div>
      <div className="value-kontak">-</div>
</div>

<div className="info-item">
      <div className="label-kontak">Jam Layanan:</div> 
      <div className="value-kontak">Senin–Jumat, pukul 07.30 – 14.30 WITA</div>
</div>

<div className="info-item">
      <div className="label-kontak">Alamat:</div>
      <div className="value-kontak"> Jl. Lahalede No. 84, Kel. Ujung Lare, Kec. Soreang, Kota Parepare, Sulsel</div>
</div>
  </div>

<div className="contact-card form-card">
  <h3>Kontak Admin Web</h3>

  {/* 🔹 Opsi Telegram */}
  <div className="contact-options">
    <ContactMethod type="telegram" />
  </div>

  {/* 🔹 Formulir Email */}
  <h3>Kirim Email</h3>
  <form ref={formRef} onSubmit={sendEmail}>
    <input name="user_name" type="text" placeholder="Nama" required />
    <input name="user_email" type="email" placeholder="Email" required />
    <textarea name="message" rows="3" placeholder="Pesan" required />
    <button type="submit">Kirim</button>
  </form>
</div>

</div>

      {/* 🗺️ Lokasi */}
      <section id="lokasi-sekolah">
        <h3 className="lokasi-title">Lokasi Sekolah</h3>
        <div className="lokasi-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.073610928984!2d119.62739447587741!3d-4.005289844645216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95bb1fab5337a5%3A0xebce98e04da69f1e!2sUPTD%20SMP%20Negeri%202%20Parepare!5e0!3m2!1sid!2sid!4v1750773778308!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Sekolah"
          ></iframe>
        </div>
      </section>
    </motion.section>
  );
}

export default Kontak;