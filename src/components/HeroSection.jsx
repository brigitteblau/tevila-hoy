import React, { useState, useEffect } from 'react';
import TevilaCard from "./TevilaCard";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className=" min-h-screen md:min-h-[90vh]
 bg-white px-4 sm:px-6 md:px-16 py-10 md:py-20 flex flex-col-reverse md:flex-row md:items-center gap-12 relative overflow-hidden overflow-y-auto scroll-smooth"
    >
      {/* Elementos decorativos (solo en desktop) */}
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 bg-teal-50 rounded-full blur-xl opacity-60"></div>
      <div className="hidden md:block absolute bottom-40 left-10 w-24 h-24 bg-blue-50 rounded-full blur-lg opacity-40"></div>

      {/* Columna de texto */}
      <div className={`w-full md:w-1/2 mt-6 md:mt-0 text-left space-y-6 transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full border border-teal-100">
          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
          Servicio GRATUITO
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
          Tevila IT, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            simple y acompañada
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mt-4"></div>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Sumergí tus utensilios con tranquilidad. 
          <span className="font-semibold text-slate-700"> Nosotros te guiamos</span> o lo hacemos por vos.
        </p>

        {/* Botón */}
        <div>
          <a
            href="#form"
            className="group inline-flex items-center justify-center px-6 py-3 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Quiero hacer Tevilá
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-6 pt-6 border-t border-slate-100">
          <div className="text-left">
            <div className="text-xl font-bold text-teal-600">10+</div>
            <div className="text-slate-500 text-sm">Voluntarios</div>
          </div>
          <div className="text-left">
            <div className="text-xl font-bold text-teal-600">98%</div>
            <div className="text-slate-500 text-sm">Satisfacción</div>
          </div>
          <div className="text-left">
            <div className="text-xl font-bold text-teal-600">24h</div>
            <div className="text-slate-500 text-sm">Disponible</div>
          </div>
        </div>
      </div>

      {/* Imagen / Card para pantallas grandes */}
      {isVisible && (
        <div className="hidden md:flex md:w-1/2 justify-center transition-all duration-700 delay-200">
          <div className="w-full max-w-md">
            <TevilaCard />
          </div>
        </div>
      )}

      {/* Alternativa visual para mobile */}
     
    </section>
  );
};

export default HeroSection;
