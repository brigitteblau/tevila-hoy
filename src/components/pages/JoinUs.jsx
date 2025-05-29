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
    <section className="bg-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            ¿Querés ser parte del equipo?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            ¡Nos alegra enormemente tener la posibilidad de sumar nuevos compañeros para ayudar a más iehudim!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-teal-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo - Información */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  1
                </span>
                Completá el formulario
              </h3>
              <p className="text-slate-600">
                Contanos un poco sobre vos y qué tipo de actividades te gustaría hacer dentro del equipo.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  2
                </span>
                Te contactamos
              </h3>
              <p className="text-slate-600">
                Nos ponemos en contacto para conocerte mejor y coordinar cómo podés sumarte al equipo.
              </p>
            </div>

            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  ✓
                </span>
                ¡Bienvenido al equipo!
              </h3>
              <p className="text-teal-600">
                Comenzás a ser parte de esta hermosa mitzvá de ayudar a la comunidad.
              </p>
            </div>
          </div>

          {/* Formulario derecho */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-2">
                  Únite a nosotros
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-slate-400 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Tu Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-slate-400 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Tu número de WhatsApp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-slate-400 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Me gustaría hacer actividades del estilo de..."
                    value={unir}
                    onChange={(e) => setUnir(e.target.value)}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-slate-400 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  type="button"
                  className={`w-full py-4 mt-6 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-teal-500 hover:bg-teal-600"
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
              </div>

              {message && (
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <p className="text-center text-emerald-700 font-medium">{message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;