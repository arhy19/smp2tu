import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const authStatus = localStorage.getItem("auth") === "true";
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    setIsAuth(authStatus);
    setUsername(storedUsername || "");
    setRole(storedRole || "");
  }, []);

  useEffect(() => {
    const syncAuthAcrossTabs = (e) => {
      if (e.key === "auth") setIsAuth(e.newValue === "true");
      if (e.key === "username") setUsername(e.newValue || "");
      if (e.key === "role") setRole(e.newValue || "");
    };

    window.addEventListener("storage", syncAuthAcrossTabs);
    return () => window.removeEventListener("storage", syncAuthAcrossTabs);
  }, []);

  const login = (name, roleValue) => {
    localStorage.setItem("auth", "true");
    localStorage.setItem("username", name);
    localStorage.setItem("role", roleValue);
    setIsAuth(true);
    setUsername(name);
    setRole(roleValue);
  };

  const logout = () => {
    localStorage.setItem("auth", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setIsAuth(false);
    setUsername("");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, username, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
