export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© 2026 Product Admin Portal. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="/terms">Terms &amp; Conditions</a>
          <span aria-hidden="true">|</span>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
