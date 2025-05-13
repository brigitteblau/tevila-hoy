import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
//   const query = new URLSearchParams(location.search);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">¡Pago Realizado!</h2>
      <p>Muchas gracias! Pronto tendra su tevila hecha. 
        No dude en consultarnos por wts por cualqueir cosa </p>
      {/* <p>ID de Transacción: {query.get('payment_id')}</p> */}
    </div>
  );
};

export default SuccessPage;
