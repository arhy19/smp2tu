import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/components/layout/Layout.jsx";
import ProtectedRoute from "@/components/shared/ProtectedRoute.jsx";

// 🧭 Halaman Utama
import LandingPage from "@/pages/landingpage/LandingPage.jsx";
import Beranda from "@/pages/beranda/Beranda.jsx";
import DashboardPublik from "@/pages/dashboardpublik/DashboardPublik.jsx";
import DashboardAdmin from "@/pages/dashboardadmin/DashboardAdmin.jsx";

// 📄 Halaman Tambahan
import Kontak from "@/pages/kontak/Kontak.jsx";
import About from "@/pages/about/About.jsx";

// 📊 Rekap
import RekapSiswa from "@/pages/subpage/rekap/RekapSiswa.jsx";
import RekapGTK from "@/pages/subpage/rekap/RekapGTK.jsx";

// 🔐 Autentikasi & Error
import Login from "@/pages/subpage/login/Login.jsx";
import NotFound from "@/pages/subpage/notfound/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 🧭 Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="beranda" element={<Beranda />} />
        <Route path="dashboardpublik" element={<DashboardPublik />} />
        <Route path="kontak" element={<Kontak />} />
        <Route path="about" element={<About />} />
        <Route path="rekapsiswa" element={<RekapSiswa />} />
        <Route path="rekapgtk" element={<RekapGTK />} />

        {/* 🔐 Protected Admin */}
        <Route
          path="dashboardadmin"
          element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        {/* 🔑 Auth & Error */}
        <Route path="login" element={<Login />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" state={{ is404: true }} replace />} />
      </Route>
    </Routes>
  );
}
