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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-teal-700">
          ¡Únite a nosotros!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          ¡Nos alegra enormemente tener la posibilidad de sumar nuevos compañeros para ayudar a más iehudim!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Tu Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="Tu número de WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Me gustaría hacer actividades del estilo de..."
            value={unir}
            onChange={(e) => setUnir(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 placeholder-gray-400"
          />

          <button
            type="submit"
            className={`w-full py-2 mt-4 text-white font-semibold rounded-lg transition duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                  ></path>
                </svg>
                Enviando...
              </div>
            ) : (
              "Enviar Solicitud"
            )}
          </button>
        </form>

        {message && (
          <p className="text-center text-green-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Join;
