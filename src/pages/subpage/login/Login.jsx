import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import "./login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const inputProps = [
    { type: "text", placeholder: "Username", field: "username", autoFocus: true },
    { type: "password", placeholder: "Password", field: "password" },
  ];

  const updateField = (field) => (e) =>
    setCredentials((prev) => ({ ...prev, [field]: e.target.value }));

  const isEmptyField = !credentials.username || !credentials.password;

  const handleLogin = async () => {
    if (isEmptyField) return alert("Mohon isi username dan password");

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbwgMiAmgG2PMkjazQzHNkyzymc2tka-6wdJHBp9yADWJ9XR4WJNX5YDsuWNtIKJrV3w/exec?username=${credentials.username}&password=${credentials.password}`
      );
      const data = await response.json();

      if (!data.valid) return alert("Login gagal: cek username & password");

      login(credentials.username);
      navigate("/DashboardAdmin", { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      alert("Terjadi kesalahan saat menghubungi server");
    }
  };

  return (
    <section className="login-page">
      <img src="/images/logo.png" alt="Logo" className="login-logo" />
      <h2>Login Portal Tata Usaha</h2>

      {inputProps.map(({ type, placeholder, field, autoFocus }) => (
        <input
          key={field}
          type={type}
          placeholder={placeholder}
          value={credentials[field]}
          onChange={updateField(field)}
          autoFocus={autoFocus}
        />
      ))}

      <button onClick={handleLogin}>Masuk</button>

      <div className="login-options">
        <button onClick={() => navigate("/Beranda")}>Kembali</button>
      </div>
    </section>
  );
}
