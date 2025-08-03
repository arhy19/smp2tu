import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import "./Login.css"; 

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
  const isValidUser = credentials.username === "admin" && credentials.password === "123456"; // bisa ganti source validasi

  const handleLogin = () => {
    if (isEmptyField) return alert("Mohon isi username dan password");
    if (!isValidUser) return alert("Login gagal: cek username & password");

    login(credentials.username);
    navigate("/DashboardAdmin", { replace: true });
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
        <button onClick={() => navigate("/")}>Kembali</button>
      </div>
    </section>
  );
}
