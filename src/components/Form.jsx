import React, { useState } from 'react';
import '../index.css';
import PaymentButton from './PaymentButton';
const TevilaForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handlePayment = () => {
    const mpUrl = `https://www.mercadopago.com.ar/init?preference_id=your_preference_id&payer_email=${formData.email}&amount=15000&reason=Tevila&external_reference=mirrow.oficial`;
    window.location.href = mpUrl;
  };

  const renderError = (field) => (
    errors[field] ? <p className="text-red-500">{errors[field]}</p> : null
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label>Nombre Completo:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className={`border p-2 mb-4 block w-full ${errors.nombre ? 'border-red-500' : ''}`} />
            {renderError('nombre')}
            
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={`border p-2 mb-4 block w-full ${errors.email ? 'border-red-500' : ''}`} />
            {renderError('email')}

            <label>Teléfono:</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className={`border p-2 mb-4 block w-full ${errors.telefono ? 'border-red-500' : ''}`} />
            {renderError('telefono')}
            
            <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded">Siguiente →</button>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Para hacerle Tevila a tu vajilla, tenés que envolverla y guardarla en cajas o bolsas resistentes. Cada caja o bolsa se llamará "bulto" y deberá estar enumerada y nombrada.</p>
            <p>Por ejemplo: si me llamo Nora y tengo <b> 5 bultos </b>, 
              mi primera caja dirá
              <b>"Nora 1/5"</b>  y la segunda <b>"Nora 2/5"</b> y así con todas.</p>
            <label>¿Cuántos bultos tenés?</label>
            <input type="number" name="bultos" value={formData.bultos} onChange={handleChange} className="border p-2 mb-4 block w-full" />
            {renderError('bultos')}
            <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded">← Anterior</button>
            <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded ml-2">Siguiente →</button>
          </div>
        );

        case 3:
          return (
            <div>
              <label>¿Por dónde hay que retirar la vajilla?</label>
              <input type="text" name="direccionRetiro" value={formData.direccionRetiro} onChange={handleChange} className="border p-2 mb-4 block w-full" />
              {renderError('direccionRetiro')}
              <label>¿Qué día podemos ir a buscarla? (a partir de 4 días hábiles)</label>
              <input 
  type="date" 
  name="fechaRetiro" 
  min={minDate()} 
  value={formData.fechaRetiro} 
  onChange={handleChange} 
  className="border p-2 mb-4 block w-full" 
/>
              {renderError('fechaRetiro')}
              <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded">← Anterior</button>
              <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded ml-2">Siguiente →</button>
            </div>
          );
          case 4:
            return (
              <div>
                <label>¿Por dónde hay que devolver la vajilla?</label>
                <input type="text" name="direccionDevolucion" value={formData.direccionRetiro} onChange={handleChange} className="border p-2 mb-4 block w-full" />
                {renderError('direccionDevolucion')}
                <label>¿Qué día podes estar para recibirla?</label>
                <input 
    type="date" 
    name="fechaDevolucion" 
    min={minDate()} 
    value={formData.fechaRetiro} 
    onChange={handleChange} 
    className="border p-2 mb-4 block w-full" 
  />
                {renderError('fechaDevolucion')}
                <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded">← Anterior</button>
                <button onClick={nextStep} className="bg-teal-500 text-white px-4 py-2 rounded ml-2">Siguiente →</button>
              </div>
            );
        default:
     

        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Perfecto, para completar le lugar necesitamos una transferencia de 15000 pesos argentinos
              Si se quiere pueder ser devueltos o puestos en tzedaka para mejorar el proyecto. 
            </h2>
           <PaymentButton/>
          </div>
        );
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {renderStep()}
    </div>
  );
};

export default TevilaForm;
