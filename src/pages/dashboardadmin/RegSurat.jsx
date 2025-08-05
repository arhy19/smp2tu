import { useState } from 'react';
import './regsurat.css';

export default function RegSurat() {
  const [tanggalRaw, setTanggalRaw] = useState('');
  const [perihal, setPerihal] = useState('');
  const [ditujukan, setDitujukan] = useState('');
  const [pembuat, setPembuat] = useState('');
  const [tampilkanIframe, setTampilkanIframe] = useState(false);

  // Format tanggal ke DD-MM-YYYY
  const formatTanggalIndonesia = (isoDate) => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tanggal = formatTanggalIndonesia(tanggalRaw);

    if (!tanggal || !perihal || !ditujukan || !pembuat) {
      alert('⚠️ Semua field wajib diisi sebelum mengirim.');
      return;
    }

    const queryParams = new URLSearchParams({
      tanggal,
      perihal,
      ditujukan,
      pembuat,
    });

    try {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbzugDjwlzuTlOAcc4xA2YxTVvLypUJTua2_bIfxqQAmkUAE_5XSfLu690mgdASoC4iM0A/exec?${queryParams.toString()}`
      );

      const resultText = await res.text();
      console.log('✅ Respon Apps Script:', resultText);
      alert(resultText);

      // Reset form + tampilkan iframe
      setTanggalRaw('');
      setPerihal('');
      setDitujukan('');
      setPembuat('');
      setTampilkanIframe(true);
    } catch (err) {
      console.error('❌ Gagal kirim ke Apps Script:', err);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <div className="regSurat">
      {tampilkanIframe ? (

        <div className="popup-iframe">
          <h3>📌 Nomor Surat Terbit:</h3>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQA8I7zGhIWYTGoKcDEXuJzvnR2DawiXBp58l-Z3tjg52Ady0nGBFoxfcvllZ7Y8RTXuk9GVjEphDZ4/pubhtml?gid=637836701&range=B3:D7"
            width="100%"
            height="120"
            style={{ border: 'none' }}
            title="Nomor Surat"
          ></iframe>
          {/*<button onClick={() => setTampilkanIframe(false)}>❌ Tutup Preview</button>*/}
        </div>

      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Tanggal Surat:
            <input
              type="date"
              value={tanggalRaw}
              onChange={(e) => setTanggalRaw(e.target.value)}
            />
          </label>
          <label>
            Perihal:
            <input
              type="text"
              placeholder="Perihal Surat"
              value={perihal}
              onChange={(e) => setPerihal(e.target.value)}
            />
          </label>
          <label>
            Ditujukan Kepada:
            <input
              type="text"
              placeholder="Ditujukan Kepada"
              value={ditujukan}
              onChange={(e) => setDitujukan(e.target.value)}
            />
          </label>
          <label>
            Pembuat Surat:
            <input
              type="text"
              placeholder="Pembuat Surat"
              value={pembuat}
              onChange={(e) => setPembuat(e.target.value)}
            />
          </label>
          <button type="submit">📨 Kirim dan Simpan</button>
        </form>
      )}
    </div>
  );
}
