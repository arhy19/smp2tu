import { useState } from 'react';

export default function RegSurat() {
  const [tanggalRaw, setTanggalRaw] = useState('');
  const [perihal, setPerihal] = useState('');
  const [ditujukan, setDitujukan] = useState('');
  const [pembuat, setPembuat] = useState('');

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
      alert("⚠️ Semua field wajib diisi sebelum mengirim.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("tanggal", tanggal);
    formData.append("perihal", perihal);
    formData.append("ditujukan", ditujukan);
    formData.append("pembuat", pembuat);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzsMVNA1qbaMF9AJFG8HrZ7UShs_FxgHBY5C9I_1cQ2rXKOFb5hzEotoSLG3FSHV6_z-w/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const resultText = await res.text();
      console.log("✅ Respon Apps Script:", resultText);
      alert(resultText);

      // Reset form
      setTanggalRaw('');
      setPerihal('');
      setDitujukan('');
      setPembuat('');
    } catch (err) {
      console.error("❌ Gagal kirim ke Apps Script:", err);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
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
  );
}
