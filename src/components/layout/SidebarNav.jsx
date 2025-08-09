import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import PropTypes from "prop-types";
import "./sidebarnav.css";

const navItems = [
  /*{ label: "🏠 Beranda", path: "/beranda" },*/
  { label: "PROFIL", path: "/dashboardpublik" },
  { label: "LAYANAN", path: "/layanan" },
  { label: "KONTAK", path: "/kontak" },
  /*{ label: "💻 Tentang", path: "/about" },*/
];

export default function SidebarNav({ isMobileNavOpen, closeMobileNav }) {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();

  const logoutAndRedirect = () => {
    logout();
    navigate("/beranda");
    closeMobileNav();
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`horizontal-nav ${isMobileNavOpen ? "open" : ""}`}
    >
      <ul className="nav-list">
        {navItems.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileNav}
            >
              {label}
            </NavLink>
          </li>
        ))}

        {isAuth && (
          <li>
            <NavLink
              to="/dashboardadmin"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileNav}
            >
              BERANDA ADMIN
            </NavLink>
          </li>
        )}

        <li>
          {isAuth ? (
            <button className="logout-btn" onClick={logoutAndRedirect}>
              LOGOUT
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileNav}
            >
              BERANDA ADMIN
            </NavLink>
          )}
        </li>
      </ul>
    </motion.nav>
  );
}

SidebarNav.propTypes = {
  isMobileNavOpen: PropTypes.bool.isRequired,
  closeMobileNav: PropTypes.func.isRequired,
};
