import React, { useState } from "react";


function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [unir, setUnir] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:tevilait20@gmail.com?subject=Me quiero Unir&body=Nombre: ${name}%0D%0ACorreo: ${email}%0D%0AWhatsApp: ${whatsapp}%0D%0AMe quiero unir ya que: ${unir}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setMessage("Solicitud preparada para envío. Verifica tu cliente de correo.");
      setName("");
      setEmail("");
      setWhatsapp("");
      setUnir("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="join-page-container">
      <div className="card">
        <div className="card-content">
          <h2 className="heading">¡Únite a nosotros!</h2>
          <span className="heading-span">
            ¡Nos alegra enormemente tener la posibilidad de sumar nuevos compañeros para ayudar a más iehudim!
          </span>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
            <input
              type="tel"
              placeholder="Tu número de WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="input"
              required
            />
            <input
              type="text"
              placeholder="Me gustaría hacer actividades del estilo de..."
              value={unir}
              onChange={(e) => setUnir(e.target.value)}
              required
              className="input"
            />
            <button 
              type="submit" 
              className="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </form>

          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Join;