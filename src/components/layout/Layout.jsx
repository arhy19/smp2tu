// src/components/Layout.jsx

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/layout/Header.jsx';
import GlowingMarquee from '@/components/layout/GlowingMarquee.jsx';
import Footer from '@/components/layout/Footer.jsx';
import PageWrapper from '@/components/ui/PageWrapper.jsx';

import '@/styles/layout/container.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMinimal = location.pathname === '/';

  return (
    <>
      {!isMinimal && (
        <div className="fixed-top-section">
          <Header toggleMenu={() => setMenuOpen(true)} />
          <GlowingMarquee />
        </div>
      )}

      <main className={`main-content ${isMinimal ? 'minimal' : ''}`}>
        <AnimatePresence mode="wait">
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>

      {!isMinimal && <Footer />}
    </>
  );
}
