import emailjs from 'emailjs-com';

emailjs.init('ry0ptOJWBtnRMfPbF');

export const sendConfirmationEmail = (formData) => {
  return emailjs.send('service_f82b2ev', 'template_c46c3k9', formData, 'ry0ptOJWBbnRMfPbF')
    .then(() => {
      console.log('Email enviado correctamente');
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
    });
};

export const goEvent = async (formData, tipo) => {
  const titulo = tipo === 'retiro' ? 'Retiro de vajilla' : 'Devolución de vajilla';
  const direccion = tipo === 'retiro' ? formData.direccionRetiro : formData.direccionDevolucion;
  const fecha = tipo === 'retiro' ? formData.fechaRetiro : formData.fechaDevolucion;

  await fetch('hhttps://script.google.com/macros/s/AKfycbxn6BJDmj-dLNa2Nw8vXQvGBvn3j_uZoLVT8aX2LrJ3wLLK5vZNzeHyQYRaEHGjaMGm/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: `${titulo} – ${formData.nombre}`,
      descripcion: `Tel: ${formData.telefono} - Email: ${formData.email} - Dirección: ${direccion}`,
      inicio: fecha,
      fin: calcularFin(fecha)
    })
  }).then(() => {
    console.log(`Evento creado en Google Calendar: ${titulo}`);
  }).catch(error => {
    console.error('Error al crear el evento:', error);
  });
};

export const calcularFin = (fechaInicio) => {
  const date = new Date(fechaInicio);
  date.setHours(date.getHours() + 3); // Supongamos que el evento dura 3 hora
  return date.toISOString();
};

