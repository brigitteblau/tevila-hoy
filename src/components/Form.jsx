import React, { useState } from 'react';
import '../index.css';
import PaymentButton from './PaymentButton';
import { sendConfirmationEmail, goEvent, calcularFin } from '../functions';

const TevilaForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const minDate = () => {
    const date = new Date();
    let daysToAdd = 4;
    while (daysToAdd > 0) {
      date.setDate(date.getDate() + 1);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        daysToAdd--;
      }
    }
    return date.toISOString().split('T')[0];
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validateStep = () => {
    let currentErrors = {};

    if (step === 1) {
      if (formData.nombre.trim() === '') {
        currentErrors.nombre = 'El nombre es obligatorio';
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        currentErrors.email = 'Email inválido';
      }
      if (!/^[0-9]{8,15}$/.test(formData.telefono)) {
        currentErrors.telefono = 'Teléfono inválido';
      }
    }

    if (step === 2 && formData.bultos <= 0) {
      currentErrors.bultos = 'Debe ser mayor a 0';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePayment = async () => {
    setIsSubmitting(true);
    try {
      // Enviar email de confirmación
      await sendConfirmationEmail(formData);
      
      // Crear eventos en Google Calendar para retiro y devolución
      await goEvent(formData, 'retiro');
      await goEvent(formData, 'devolucion');
      
      // Redirigir a Mercado Pago
      const mpUrl = `https://www.mercadopago.com.ar/init?preference_id=your_preference_id&payer_email=${formData.email}&amount=15000&reason=Tevila&external_reference=mirrow.oficial`;
      window.location.href = mpUrl;
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      alert('Hubo un error al procesar la solicitud. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (field) => (
    errors[field] ? <p className="text-red-500 text-sm mt-1">{errors[field]}</p> : null
  );

  const renderProgressBar = () => {
    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;
    
    return (
      <div className="mb-8 w-full">
        <div className="flex justify-between mb-2">
          {[...Array(totalSteps)].map((_, index) => (
            <div 
              key={index} 
              className={`rounded-full w-8 h-8 flex items-center justify-center ${index + 1 <= step ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderStep = () => {
    const buttonClasses = "transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50";
    const inputClasses = (fieldName) => `border rounded-lg p-3 w-full text-gray-800 transition duration-200 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'}`;

    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">Nombre Completo:</label>
              <input 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                className={inputClasses('nombre')} 
                placeholder="Ingresa tu nombre completo"
              />
              {renderError('nombre')}
            </div>
            
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={inputClasses('email')} 
                placeholder="ejemplo@correo.com"
              />
              {renderError('email')}
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">Teléfono:</label>
              <input 
                type="tel" 
                name="telefono" 
                value={formData.telefono} 
                onChange={handleChange} 
                className={inputClasses('telefono')} 
                placeholder="Tu número de teléfono (8-15 dígitos)"
              />
              {renderError('telefono')}
            </div>
            
            <div className="flex justify-end mt-6">
              <button 
                onClick={nextStep} 
                className={`${buttonClasses} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center`}
              >
                Siguiente <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-md mb-6">
              <p className="text-gray-700 mb-3">Para hacerle Tevila a tu vajilla, tenés que envolverla y guardarla en cajas o bolsas resistentes. Cada caja o bolsa se llamará "bulto" y deberá estar enumerada y nombrada.</p>
              <p className="text-gray-700">
                Por ejemplo: si me llamo Nora y tengo <span className="font-bold">5 bultos</span>, 
                mi primera caja dirá <span className="font-bold">"Nora 1/5"</span> y la segunda <span className="font-bold">"Nora 2/5"</span> y así con todas.
              </p>
            </div>
            
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">¿Cuántos bultos tenés?</label>
              <input 
                type="number" 
                min="1"
                name="bultos" 
                value={formData.bultos} 
                onChange={handleChange} 
                className={inputClasses('bultos')} 
              />
              {renderError('bultos')}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevStep} 
                className={`${buttonClasses} bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg flex items-center`}
              >
                <span className="mr-2">←</span> Anterior
              </button>
              <button 
                onClick={nextStep} 
                className={`${buttonClasses} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center`}
              >
                Siguiente <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">¿Por dónde hay que retirar la vajilla?</label>
              <input 
                type="text" 
                name="direccionRetiro" 
                value={formData.direccionRetiro} 
                onChange={handleChange} 
                className={inputClasses('direccionRetiro')} 
                placeholder="Dirección completa para el retiro"
              />
              {renderError('direccionRetiro')}
            </div>
            
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">¿Qué día podemos ir a buscarla? (a partir de 4 días hábiles)</label>
              <input 
                type="date" 
                name="fechaRetiro" 
                min={minDate()} 
                value={formData.fechaRetiro} 
                onChange={handleChange} 
                className={inputClasses('fechaRetiro')} 
              />
              {renderError('fechaRetiro')}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevStep} 
                className={`${buttonClasses} bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg flex items-center`}
              >
                <span className="mr-2">←</span> Anterior
              </button>
              <button 
                onClick={nextStep} 
                className={`${buttonClasses} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center`}
              >
                Siguiente <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">¿Por dónde hay que devolver la vajilla?</label>
              <input 
                type="text" 
                name="direccionDevolucion" 
                value={formData.direccionDevolucion} 
                onChange={handleChange} 
                className={inputClasses('direccionDevolucion')} 
                placeholder="Dirección completa para la devolución"
              />
              {renderError('direccionDevolucion')}
            </div>
            
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">¿Qué día podés estar para recibirla?</label>
              <input 
                type="date" 
                name="fechaDevolucion" 
                min={minDate()}  
                value={formData.fechaDevolucion} 
                onChange={handleChange} 
                className={inputClasses('fechaDevolucion')} 
              />
              {renderError('fechaDevolucion')}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevStep} 
                className={`${buttonClasses} bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg flex items-center`}
              >
                <span className="mr-2">←</span> Anterior
              </button>
              <button 
                onClick={nextStep} 
                className={`${buttonClasses} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center`}
              >
                Siguiente <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Perfecto, para completar el proceso necesitamos una transferencia de 15000 pesos argentinos
              </h2>
              <p className="text-gray-700 mb-4">
                Si se quiere, pueden ser devueltos o puestos en tzedaka para mejorar el proyecto.
              </p>
              <div className="mt-6">
                <PaymentButton onClick={handlePayment} disabled={isSubmitting} />
              </div>
            </div>
            <button 
              onClick={prevStep} 
              className={`${buttonClasses} bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg flex items-center mx-auto`}
            >
              <span className="mr-2">←</span> Volver al paso anterior
            </button>
          </div>
        );
    }
  };

  return (
    <section id='form' className='m-5'>
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg"> 
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-600">Estas a unos pocos pasos de tener tu vajilla kosher</h1>
      </div>
      
      {renderProgressBar()}
      {renderStep()}
    </div>
    </section>
  );
};

export default TevilaForm;