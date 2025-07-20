// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from "@/components/layout/Layout.jsx";     // ✅ Alias based
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


import Home from './pages/Home.jsx';
import Publik from './pages/Publik.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Siswa from './pages/Siswa.jsx';
import GTK from './pages/GTK.jsx';


export default function App() {
  return (
 
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/publik" element={<Publik />} />
    <Route path="/siswa" element={<Siswa />} />
    <Route path="/GTK" element={<GTK />} />  
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/admin" element={
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    } />
  </Route>

  {/* 🔐 Auth & Fallback */}
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<NotFound />} />
</Routes>
  );
}