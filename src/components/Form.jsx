import React, { useState } from 'react';
import '../index.css';

const TevilaForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    bultos: 0,
    direccionRetiro: '',
    fechaRetiro: '',
    fechaDevolucion: '',
    direccionDevolucion: '',
    conociste: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.nombre.trim() !== '';
      case 2:
        return (
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 
          /^[0-9]{8,15}$/.test(formData.telefono)
        );
      case 3:
        return formData.bultos > 0;
      case 4:
        return formData.direccionRetiro.trim() !== '' && formData.fechaRetiro !== '';
      case 5:
        return formData.fechaDevolucion !== '' && formData.direccionDevolucion.trim() !== '';
      case 6:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      alert("Por favor, completá correctamente todos los campos.");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePayment = () => {
    const mpUrl = `https://www.mercadopago.com.ar/init?preference_id=your_preference_id&payer_email=${formData.email}&amount=15000&reason=Tevila&external_reference=mirrow.oficial`;
    window.location.href = mpUrl;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div id="form" className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Formulario de Tevila</h2>
            <label>Nombre Completo:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="border p-2 mb-4 block w-full" />
            <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded">Siguiente →</button>
          </div>
        );
      case 2:
        return (
          <div className="p-8 bg-gray-100 min-h-screen">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 mb-4 block w-full" />
            <label>Teléfono:</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="border p-2 mb-4 block w-full" />
            <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded">← Anterior</button>
            <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded ml-2">Siguiente →</button>
          </div>
        );
      case 3:
        return (
          <div className="p-8 bg-gray-100 min-h-screen">
            <p>Para hacer Tevila a tu vajilla, envolvela en cajas o bolsas resistentes. Cada bulto debe estar numerado.</p>
            <p>Ejemplo: Brigitte 1/5, Brigitte 2/5, etc.</p>
            <label>¿Cuántos bultos tenés?</label>
            <input type="number" name="bultos" value={formData.bultos} onChange={handleChange} className="border p-2 mb-4 block w-full" />
            <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded">← Anterior</button>
            <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded ml-2">Siguiente →</button>
          </div>
        );
      case 6:
        return (
          <div className="p-8 bg-gray-100 min-h-screen">
            <p>Para asegurar la reserva, se realizará un pago de <strong>$15,000</strong> mediante Mercado Pago al alias <strong>mirrow.oficial</strong>.</p>
            <button onClick={handlePayment} className="bg-teal-500 text-white px-4 py-2 rounded">Ir a Mercado Pago</button>
          </div>
        );
      default:
        return <p>Formulario completado.</p>;
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {renderStep()}
    </div>
  );
};

export default TevilaForm;

