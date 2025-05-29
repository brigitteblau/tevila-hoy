import React, { useState, useEffect } from 'react';
import TevilaCard from "./TevilaCard";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="bg-white px-6 sm:px-8 md:px-16 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-12 relative overflow-hidden"
      style={{ minHeight: "100vh", perspective: '1000px' }}
    >
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-teal-50 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-blue-50 rounded-full blur-lg opacity-40"></div>

      {/* Columna de texto */}
      <div className={`w-full md:w-1/2 text-center md:text-left space-y-6 transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Badge sutil */}
        <div className="inline-flex items-center px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full border border-teal-100">
          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
          Servicio GRATUITO
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
          Tevila IT, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            simple y acompañada
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mt-4 mx-auto md:mx-0"></div>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Sumergí tus utensilios con tranquilidad. 
          <span className="font-semibold text-slate-700"> Nosotros te guiamos</span> o lo hacemos por vos.
        </p>

        {/* Botón principal */}
        <div className="pt-2">
          <a
            href="#form"
            className="group inline-flex items-center justify-center px-8 py-4 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Quiero hacer Tevilá
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Pequeñas estadísticas */}
        <div className="flex gap-8 pt-6 border-t border-slate-100">
          <div className="text-center">
            <div className="text-xl font-bold text-teal-600">10+</div>
            <div className="text-slate-500 text-sm">Voluntarios</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-teal-600">98%</div>
            <div className="text-slate-500 text-sm">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-teal-600">24h</div>
            <div className="text-slate-500 text-sm">Disponible</div>
          </div>
        </div>
      </div>

      {/* Columna de imagen con flip */}
      <div className={`w-full md:w-1/2 flex justify-center transform transition-all duration-700 delay-200 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="relative group" style={{ perspective: '1000px' }}>
          <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/50 to-blue-100/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          {/* Componente visual */}
          <TevilaCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
