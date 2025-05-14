import React from "react";

const Privacy = () => {
  const fechaActual = new Date().toLocaleDateString("es-ES");

  return (
    <div className="terminos-container">
      <div className="centrado">
        <p>Política de Privacidad</p>
      </div>
      
      <div>
        <p className="actualizacion">Última actualización: {fechaActual}</p>
        
        <section>
          <p className="subtitulo">1. Información Recopilada</p>
          <p>No recopilamos ni almacenamos información personal de los usuarios. Sin embargo, al completar el formulario de contacto, recibimos un correo electrónico con la información que proporcionaste.</p>
        </section>

        <section>
          <p className="subtitulo">2. Uso de la Información</p>
          <p>La información enviada a través del formulario es utilizada únicamente para responder consultas y no se almacena en bases de datos.</p>
        </section>

        <section>
          <p className="subtitulo">3. Compartición de Datos</p>
          <p>No compartimos ni vendemos la información recibida a terceros.</p>
        </section>

        <section>
          <p className="subtitulo">4. Seguridad</p>
          <p>Tomamos medidas razonables para proteger la información enviada a través del formulario, pero no podemos garantizar seguridad absoluta.</p>
        </section>

        <section>
          <p className="subtitulo">5. Cambios en la Política</p>
          <p>Nos reservamos el derecho de modificar esta política de privacidad. Cualquier cambio será reflejado en nuestra plataforma.</p>
        </section>

        <section>
          <p className="subtitulo">6. Contacto</p>
          <p>Si tienes dudas o inquietudes sobre nuestra política de privacidad, puedes escribirnos a: <a href="mailto:contacto@tevilait.com" className="contacto">contacto@tevilait.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;