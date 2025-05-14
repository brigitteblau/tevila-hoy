import React from 'react';
import '../index.css';

const HeroSection = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center gap-6 p-6"
    >
      <div className="flex items-center gap-4">
 <img src="/logoB.png" alt="Logo" className="w-80 h-42" />
        {/* <h1 className="text-5xl font-extrabold tracking-wide">
          Tevila It
        </h1> */}
      </div>
      <p className="text-lg text-center max-w-lg leading-relaxed">
        La Tevila es un proceso espiritual que permite purificar y elevar los objetos. 
        Con nosotros, asegurás el cumplimiento de esta tradición de manera accesible y comprometida.
      </p>
      <a 
        href="#form" 
        className="px-8 py-4 bg-teal-600 rounded-full shadow-lg hover:bg-teal-500 transition transform hover:scale-105"
      >
        ¿Querés hacer Tevila?
      </a>
    </section>
  );
};

export default HeroSection;
