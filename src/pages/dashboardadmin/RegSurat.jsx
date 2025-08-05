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

  const queryParams = new URLSearchParams({
    tanggal,
    perihal,
    ditujukan,
    pembuat,
  });

  try {
    const res = await fetch(
      `https://script.google.com/macros/s/AKfycbz4RUnFlxkbGwVQy1VmV9kLb-svbgKldbZJRNmzvb82SIPTPQQUvBj7-1VG3O905RF6PQ/exec?${queryParams.toString()}`
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
