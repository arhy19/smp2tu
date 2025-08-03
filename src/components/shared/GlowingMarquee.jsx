import { useEffect, useRef, useState } from 'react';
import './glowingmarquee.css';

export default function GlowingMarquee() {
  const marqueeRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Pause/resume animasi saat interaksi
  const pause = () => marqueeRef.current?.classList.add('paused');
  const resume = () => marqueeRef.current?.classList.remove('paused');

  // 📡 Fetch pengumuman dari Google Apps Script
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxQdx2UrWncoTN1i7IR0PTo1TF4ggP6qQ4iZDEtu25ku1oQun5oiJXJ1QXSBt7MuQl5ZA/exec')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const spacedText = data.map(item => `📢 ${item}`).join('  ');
          setMessages([spacedText]);
        } else {
          setMessages(['⚠️ Tidak ada pengumuman aktif']);
        }
      })
      .catch(() => {
        setMessages(['🚫 Gagal memuat pengumuman']);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="glowing-marquee"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={marqueeRef}
        className="marquee-text"
      >
        {loading ? '⏳ Mengambil pengumuman...' : messages[0]}
      </div>
    </div>
  );
}
