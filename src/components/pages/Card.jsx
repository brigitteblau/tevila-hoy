import React from "react";


const Card = () => {
  const features = [
    {
      title: "¿Qué es la Tevilá?",
      text: "El baño ritual sagrado que purifica tus utensilios antes del primer uso según la tradición judía.",
      image: "/faq/servicio.jpeg",
      icon: "✨"
    },
    {
      title: "Hacemos la Tevilá por vos y/o con vos!",
      text: "Retiramos tus utensilios, los llevamos a la mikve y te los devolvemos. Nos podés acompañar a la tevila.",
      image: "/faq/logistica.jpg",
      icon: "🔄"
    },
    {
      title: "Guía y confianza",
      text: "Seguimos las halajot del Rab Ovadia Yosef con el respaldo completo del equipo de Menorá. Aprendé con tranquilidad.",
      image: "/faq/halaja.jpg",
      icon: "🤝"
    },
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
   
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl shadow-lg border border-slate-100">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-700 mb-3 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.text}
                </p>
                <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-slate-100">
                  <div className="h-0.5 bg-teal-500 rounded-full w-8"></div>
                  <div className="w-2 h-2 bg-emerald-200 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <h4 className="text-xl font-bold text-slate-700 mb-4">
              ¿Por qué invitamos a participar?
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Aunque hacemos la Tevilá por vos, te invitamos a venir con nosotros para que puedas aprender, participar en las bendiciones
              y experimentar esta mitzvá sagrada. La mejor manera de ayudar es enseñando mientras hacemos el trabajo juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;