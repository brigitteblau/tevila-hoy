import React from "react";

const Terms = () => {
  const fechaActual = new Date().toLocaleDateString("es-ES");

  return (
    <div className="terminos-container">
      <div className="centrado">
        <p>Términos y Condiciones</p>
      </div>
      
      <div>
      <p className="actualizacion">Última actualización: {fechaActual}</p>        
        <section>
          <p className="subtitulo">1. Aceptación de los Términos</p>
          <p>Al acceder y utilizar el sitio web TevilaIt.com usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con estos términos, no utilice este sitio web.</p>
        </section>

        <section>
          <p className="subtitulo">4. Enlaces a Otros Sitios Web</p>
          <p>Podemos incluir enlaces a sitios de terceros, pero no nos hacemos responsables de su contenido ni políticas.</p>
        </section>

        <section>
          <p className="subtitulo">5. Limitación de Responsabilidad</p>
          <p>No nos hacemos responsables de daños derivados del uso del sitio web.</p>
        </section>

        <section>
          <p className="subtitulo">6. Cambios en los Términos y Condiciones</p>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
        </section>

        <section>
          <p className="subtitulo">7. Ley Aplicable</p>
          <p>Estos términos se rigen por las leyes de la República Argentina.</p>
        </section>

        <section>
          <p className="subtitulo">8. Contacto</p>
          <p>Si tiene preguntas, puede contactarnos en <a href="mailto:tevilait20@gmail.com" className="contacto">tevilait20@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;