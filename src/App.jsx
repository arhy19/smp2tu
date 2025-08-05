import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/components/layout/Layout.jsx";
import ProtectedRoute from "@/components/shared/ProtectedRoute.jsx";

// 🧭 Halaman
import LandingPage from "@/pages/landingpage/LandingPage.jsx";
import Beranda from "@/pages/beranda/Beranda.jsx";
import DashboardPublik from "@/pages/dashboardpublik/DashboardPublik.jsx";
import DashboardAdmin from "@/pages/dashboardadmin/DashboardAdmin.jsx";
import Layanan from "@/pages/layanan/Layanan.jsx";
import Kontak from "@/pages/kontak/Kontak.jsx";
import About from "@/pages/about/About.jsx";

// 📊 Rekap
import RekapGTK from "@/pages/subpage/rekap/RekapGTK.jsx";
import RekapSiswa from "@/pages/subpage/rekap/RekapSiswa.jsx";
import RekapSarpras from "@/pages/subpage/rekap/RekapSarpras.jsx";
import RekapAlumni from "@/pages/subpage/rekap/RekapAlumni.jsx";

// 📊 layanandashboardadmin
import RegSurat from "@/pages/dashboardadmin/RegSurat.jsx";

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
        <Route path="layanan" element={<Layanan />} />
        <Route path="rekapgtk" element={<RekapGTK />} />
        <Route path="rekapsiswa" element={<RekapSiswa />} />
        <Route path="rekapsarpras" element={<RekapSarpras />} />
        <Route path="rekapalumni" element={<RekapAlumni />} />

        {/* 🔐 Protected Admin */}
        <Route
          path="dashboardadmin"
          element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="regsurat"
          element={
            <ProtectedRoute>
              <RegSurat />
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
