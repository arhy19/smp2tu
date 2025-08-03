import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Website TU — by Operator Dapodik</p>
    </footer>
  );
}