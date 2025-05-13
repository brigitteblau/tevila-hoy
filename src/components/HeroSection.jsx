import React from 'react';
import '../index.css';

const HeroSection = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--primary-hover)" }}>
       <img src="/logo.png" alt="" srcset="" />
      </h1>
      <p className="text-lg mb-8 text-center max-w-md" style={{ color: "var(--text-primary)" }}>
        La Tevila es un proceso espiritual que permite purificar y elevar los objetos. Con nosotros, asegurás el cumplimiento de esta tradición de manera accesible y comprometida.
      </p>
      <a href="#form" className="px-6 py-3 rounded-xl hover:bg-teal-600 transition" style={{ backgroundColor: "var(--primary)", color: "var(--white)" }}>
        ¿Querés hacer Tevila?
      </a>
    </section>
  );
};

export default HeroSection;
