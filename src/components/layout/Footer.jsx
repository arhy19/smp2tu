import '@/styles/layout/footer.css'; // ✅ path baru dengan alias

export default function Footer() {
  return (
    <footer className="v4-footer">
      <p>&copy; {new Date().getFullYear()} Website TU — by Operator Dapodik</p>
    </footer>
  );
}