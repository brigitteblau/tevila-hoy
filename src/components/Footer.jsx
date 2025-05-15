import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="footer-section">
            <h3 className="text-base font-medium mb-2">Contacto</h3>
            <div className="space-y-1">
              <p><a href="mailto:tevilait20@gmail.com" className="hover:text-gray-300 transition-colors text-sm">📧 tevilait20@gmail.com</a></p>
              <p><a href="https://wa.me/5491165958082" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-sm">📞 +54 9 11 65 95 80 82</a></p>
              <p className="text-sm">📍 Argentina, Buenos Aires</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="text-base font-medium mb-2">Legal</h3>
            <div className="space-y-1 flex flex-col">
              <Link to="/terminos-y-condiciones" className="hover:text-gray-300 transition-colors text-sm">Términos y Condiciones</Link>
              <Link to="/politica-de-privacidad" className="hover:text-gray-300 transition-colors text-sm">Política de Privacidad</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="text-base font-medium mb-2">Empresa</h3>
            <div className="space-y-1">
              <Link to="/ser-parte" className="hover:text-gray-300 transition-colors text-sm">Ser parte</Link>
               <Link to="/preguntas-frecuentes" className="hover:text-gray-300 transition-colors text-sm">Preguntas frecuentes</Link>

            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-center text-xs">&copy; {new Date().getFullYear()} Tevila It. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;