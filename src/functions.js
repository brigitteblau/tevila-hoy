import emailjs from 'emailjs-com';

emailjs.init('ry0ptOJWBbnRMfPbF');

export const sendConfirmationEmail = (formData) => {
  // Mapeo de los datos según los campos del template
  const templateParams = {
    name: formData.nombre,
    email: formData.email,
    phone: formData.telefono,
    contactPreference: formData.conociste,
    question: "Solicitud de Tevila",
    pickupVajilla: formData.direccionRetiro ? "Sí" : "No",
    message: `Retiro en: ${formData.direccionRetiro}, Fecha: ${formData.fechaRetiro}. 
    Devolución en: ${formData.direccionDevolucion}, Fecha: ${formData.fechaDevolucion}. 
    Cantidad de bultos: ${formData.bultos}`,
    from_name: formData.nombre,
    reply_to: formData.email
  };

  // Envío del email
  return emailjs.send('service_f82b2ev', 'template_c46c3k9', templateParams, 'ry0ptOJWBbnRMfPbF')
    .then((response) => {
      console.log('Email enviado correctamente:', response);
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert('No se pudo enviar el correo. Por favor, intenta de nuevo.');
    });
};



export const goEvent = async (formData, tipo) => {
  const isRetiro = tipo === 'retiro';

  const data = {
    tipo, // 'retiro' o 'devolucion'
    nombre: formData.nombre,
    email: formData.email,
    telefono: formData.telefono,
    direccion: isRetiro ? formData.direccionRetiro : formData.direccionDevolucion,
    fecha: isRetiro ? formData.fechaRetiro : formData.fechaDevolucion,
    fin: calcularFin(isRetiro ? formData.fechaRetiro : formData.fechaDevolucion),
  };

  await fetch('https://script.google.com/macros/s/AKfycbylJQC46jHDm8efme2SpT-2EMtH7d5QIm9d3KiF3ExzLD-r_h6uq_36lGjqH1x_cT09ow/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(() => {
    console.log(`Evento ${tipo} creado`);
  }).catch(error => {
    console.error(`Error al crear evento ${tipo}:`, error);
  });
};


export const calcularFin = (fechaInicio) => {
  const date = new Date(fechaInicio);
  date.setHours(date.getHours() + 3); // Supongamos que el evento dura 3 hora
  return date.toISOString();
};

