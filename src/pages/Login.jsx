import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/styles/pages/login.css';

const adminUsers = {
  t: 'u',
  waka: 'sek',
  kep: 'sek',
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert('Mohon isi username dan password terlebih dahulu');
      return;
    }

    const isValidUser = adminUsers[username] === password;

    if (isValidUser) {
      // Simpan ke localStorage
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username);

      // Langsung navigasi ke halaman admin
      navigate('/admin', { replace: true });
    } else {
      alert('Login gagal: cek username & password');
    }
  };

  return (
    <section className="login-page">
      <img src="/images/logo.png" alt="Logo" className="login-logo" />
      <h2>Login Portal Tata Usaha</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Masuk</button>

      <div className="login-options">
        <button onClick={() => navigate('/')}>Kembali</button>
      </div>
    </section>
  );
}