import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-green-600 mb-4">✅ ¡Pago Realizado!</h2>
      <p className="text-lg mb-4">
        Muchas gracias por tu pago. Pronto tendremos tu tevila lista. 
        Nos pondremos en contacto para coordinar el retiro.
      </p>
      <p className="text-md mb-6">
        Si tenés alguna duda, escribinos por 
        <a 
          href="https://wa.me/549XXXXXXXXXX" 
          className="text-green-500 font-bold hover:underline" 
          target="_blank"
          rel="noopener noreferrer"
        > WhatsApp </a>.
      </p>
      <p className="text-md mb-6">
        ID de Transacción: {query.get('payment_id') || 'No disponible'}
      </p>
      <Link to="/" className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
        Volver al inicio
      </Link>
    </div>
  );
};

export default SuccessPage;
