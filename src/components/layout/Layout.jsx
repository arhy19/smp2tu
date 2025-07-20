// src/components/Layout.jsx

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/layout/Header.jsx';
import GlowingMarquee from '@/components/layout/GlowingMarquee.jsx';
import Sidebar from '@/components/layout/Sidebar.jsx';
import Footer from '@/components/layout/Footer.jsx';

import PageWrapper from '@/components/ui/PageWrapper.jsx';
import '@/styles/layout/container.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 🚫 Lokasi yang tidak perlu layout (hanya landing page)
  const isMinimal = location.pathname === '/';

  if (isMinimal) {
    // 💡 Render bersih tanpa header/footer
    return (
      <main className="main-content">
        <AnimatePresence mode="wait">
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>
    );
  }

  // ✅ Layout penuh untuk halaman lain
  return (
    <div className="layout-wrapper">
      <GlowingMarquee />
      <Header toggleMenu={() => setMenuOpen(true)} />
      <Sidebar isOpen={menuOpen} toggle={() => setMenuOpen(false)} />

      <main className="main-content">
        <AnimatePresence mode="wait">
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
