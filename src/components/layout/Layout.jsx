import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import SidebarNav from "./SidebarNav.jsx";
import Marquee from "../shared/GlowingMarquee.jsx";
import Footer from "./Footer.jsx";

import "./layout.css";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname.toLowerCase();
  const minimalRoutes = ["/", "/beranda", "/login", "/404"];
  const is404 = location.state?.is404 === true;
  const hideLayout = minimalRoutes.includes(path) || is404;

  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") === "true");

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setMobileNavOpen(false);

  const handleLogout = () => {
    localStorage.setItem("auth", "false");
    setIsAuth(false);
    navigate("/");
    closeMobileNav();
  };

  useEffect(() => {
    const syncAuth = () => {
      setIsAuth(localStorage.getItem("auth") === "true");
    };
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  return (
    <div className="layout-wrapper">
      {!hideLayout && (
        <>
          <Header toggleMobileNav={toggleMobileNav} />
          <SidebarNav
            isMobileNavOpen={isMobileNavOpen}
            closeMobileNav={closeMobileNav}
            isAuth={isAuth}
            handleLogout={handleLogout}
          />
          <Marquee />
        </>
      )}

      <main className={`layout-main ${hideLayout ? "full-width" : ""}`}>
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
