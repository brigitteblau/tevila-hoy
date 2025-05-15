import React from 'react';

import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const StatusPage = ({ status }) => {
  const statusInfo = {
    pending: {
      title: "Pago pendiente",
      message: "Tu pago está en proceso. Te notificaremos cuando se complete.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: <Clock className="w-12 h-12 text-yellow-500 mb-4" />,
    },
    success: {
      title: "¡Pago realizado!",
      message: "Muchas gracias por confiar en nosotros. Pronto tendrás tu Tevila completada. Si completaste algo mal o quieres cambiar algo contáctanos vía WhatsApp lo antes posible.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: <CheckCircle className="w-12 h-12 text-green-500 mb-4" />,
    },
    failure: {
      title: "Pago rechazado",
      message: "Hubo un problema al procesar tu pago. Por favor, intenta nuevamente o contáctanos para más información.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: <AlertCircle className="w-12 h-12 text-red-500 mb-4" />,
    },
  };

  const { title, message, color, bgColor, borderColor, icon } = statusInfo[status];
  
  return (
    <div className={` p-16 rounded-lg flex items-center justify-center ${bgColor} m-2`}>
      <div className={`p-8 text-center max-w-md bg-white rounded-lg shadow-xl border ${borderColor}`}>
        <div className="flex justify-center">
          {icon}
        </div>
        <h1 className={`text-3xl font-bold mb-4 ${color}`}>{title}</h1>
        <p className="mb-8 text-gray-700 leading-relaxed">{message}</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 inline-block shadow-md hover:shadow-lg"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default StatusPage;

