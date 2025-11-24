export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span className="footer-text">© {new Date().getFullYear()} RentalCar</span>
        <span className="footer-text">All rights reserved</span>
      </div>
    </footer>
  );
}
