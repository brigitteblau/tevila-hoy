import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-teal-700 text-white p-10">
      <h2 className="text-4xl font-bold mb-4">✅ ¡Pago Realizado!</h2>
      <p className="text-lg mb-4 max-w-xl text-center">
        Muchas gracias por tu pago. Pronto tendremos tu tevila lista. Nos pondremos en contacto para coordinar el retiro.
      </p>
      <p className="text-md mb-4 max-w-xl text-center">
        Si tenés alguna duda, escribinos por WhatsApp y con gusto te ayudaremos.
      </p>
      
      <a 
        href="https://wa.me/549XXXXXXXXXX" 
        className="px-5 py-2 mb-6 bg-primary text-white rounded-md hover:bg-primary-hover transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactar por WhatsApp
      </a>
      
      <p className="text-md mb-6">
        <strong>ID de Transacción:</strong> {query.get('payment_id') || 'No disponible'}
      </p>
      
      <Link 
        to="/" 
        className="px-5 py-2 bg-secondary text-primary rounded-md hover:bg-primary hover:text-white transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default SuccessPage;
