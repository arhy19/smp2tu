import '@/styles/layout/sidebar.css'; // ✅ path baru dengan alias
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <aside className={`v4-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggle}>✖</button>
      <nav className="sidebar-menu">
        <Link to="/" onClick={toggle}>Home</Link>
        <Link to="/projects" onClick={toggle}>Projects</Link>
        <Link to="/contact" onClick={toggle}>Contact</Link>
        <Link to="/login">Login</Link>

      </nav>
    </aside>
  );
}