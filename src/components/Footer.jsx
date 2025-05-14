import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-section-title">Contacto</h3>
            <div className="footer-contact">
              <p><a href="mailto:tevilait20@gmail.com">📧 tevilait20@gmail.com</a></p>
              <p><a href="https://wa.me/5491165958082" target="_blank" rel="noopener noreferrer">📞 +54 9 11 65 95 80 82</a></p>
              <p>📍 Argentina, Buenos Aires</p>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Legal</h3>
            <div className="footer-contact">
              <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
              <Link to="/politica-de-privacidad">Política de Privacidad</Link>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Empresa</h3>
            <div className="footer-contact">
              <Link to="/ser-parte">Ser parte</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">&copy; {new Date().getFullYear()} Tevila It. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;