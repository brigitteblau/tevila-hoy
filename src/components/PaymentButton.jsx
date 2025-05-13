import React, { useState } from 'react';

const PaymentButton = ({ email }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Llamada a la API para crear una preferencia de pago
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer APP_USR-2252587502031509-051309-1ad0d871bcd24315190fe09cdedf0224-202469705`
        },
        body: JSON.stringify({
          items: [
            {
              title: 'Tevila - Servicio',
              quantity: 1,
              unit_price: 15000
            }
          ],
          payer: {
            email: email
          },
          back_urls: {
            success: `https://tevilait.com/success`, 
            failure: `https://tevilait.com/failure`,
            pending: `https://tevilait.com/pending`,
          },
          auto_return: "approved",
          statement_descriptor: "TEVILA",
        })
      });

      // Respuesta de Mercado Pago
      const data = await response.json();

      // Redireccionar al checkout de Mercado Pago
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        console.error("Error al obtener el link de pago:", data);
        alert("Hubo un problema al generar el pago. Intenta nuevamente.");
      }

    } catch (error) {
      console.error("Error al crear la preferencia de pago:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={handlePayment} 
        className={`bg-teal-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
        disabled={loading}
      >
        {loading ? "Procesando..." : "Ir a Mercado Pago"}
      </button>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500"></div>
          <p className="text-white mt-2">Redirigiendo a Mercado Pago...</p>
        </div>
      )}
    </div>
  );
};

export default PaymentButton;
