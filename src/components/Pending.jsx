import React from 'react';
import { Link } from 'react-router-dom';

const Pending = () => (
  <div className="p-10 text-center" style={{ backgroundColor: "var(--tevila-background-color)", minHeight: "100vh" }}>
    <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--tevila-pending-color)" }}>⚠️ Pago en Proceso</h1>
    <p className="text-lg mb-4" style={{ color: "var(--tevila-text-color)" }}>
      Tu pago está siendo procesado. Este proceso puede demorar unos minutos.
    </p>
    <p className="text-md mb-6" style={{ color: "var(--tevila-text-color)" }}>
      Te notificaremos cuando se complete. Si tenés alguna duda, podés contactarnos por 
      <a 
        href="https://wa.me/549XXXXXXXXXX" 
        className="font-bold hover:underline" 
        style={{ color: "var(--tevila-link-color)" }}
        target="_blank"
        rel="noopener noreferrer"
      > WhatsApp </a>.
    </p>
    <Link to="/" className="px-5 py-2 rounded-md hover:opacity-90" style={{ backgroundColor: "var(--tevila-pending-color)", color: "#fff" }}>
      Volver al inicio
    </Link>
  </div>
);

export default Pending;
