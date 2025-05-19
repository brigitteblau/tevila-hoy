import { useState } from "react";

// Los datos de preguntas frecuentes
const data = [
  {
    categoria: "Sobre el servicio",
    imagen: "/faq/servicio.jpeg",
    preguntas: [
      {
        pregunta: "¿Cómo funciona Tevila It?",
        respuesta: "Solo completás un formulario indicando cuántos utensilios necesitás sumergir y si los traés vos o querés que pasemos a buscarlos. Nosotros hacemos la tevila en un mikve kasher y te avisamos cuando estén listos para que los retires o te los llevemos de vuelta."
      },
      {
        pregunta: "¿Dónde se hace la tevila?",
        respuesta: "La inmersión se realiza en un mikve kasher (la de yeshurun tora), siguiendo todas las halajot correspondientes para que puedas usar tus utensilios con tranquilidad."
      },
      {
        pregunta: "¿Quién se encarga de la tevila?",
        respuesta: "Nuestro equipo se asegura de que la inmersión se haga correctamente, siguiendo las normas halájicas. Si tenés alguna preferencia específica, ¡contanos y lo coordinamos!"
      },
      {
        pregunta: "¿Cuánto tarda el proceso?",
        respuesta: "Depende de la cantidad de utensilios y la demanda, pero nuestro ideal es completarlo entre 3 a 7 días."
      }
    ]
  },
  {
    categoria: "Sobre los utensilios",
    imagen: "/faq/utensillos.png",
    preguntas: [
      {
        pregunta: "¿Qué utensilios necesitan tevila?",
        respuesta: "Todos los que sean de metal o vidrio y estén en contacto directo con la comida, como vasos, cubiertos, ollas y fuentes. Algunos tipos de cerámica vidriada también (revisar antes de traer)."
      },
      {
        pregunta: "¿Los utensilios deben estar limpios antes de la tevila?",
        respuesta: "Sí, es importante que lleguen sin restos de comida, etiquetas o adhesivos, para que la inmersión sea válida."
      },
      {
        pregunta: "¿La tevila también kasheriza los utensilios?",
        respuesta: "No, la tevila es un requisito espiritual, pero no elimina impurezas de alimentos no kasher. Si un utensilio necesita kasherización, ese proceso debe hacerse antes de la inmersión. (Solo avísennos y nosotros nos ocupamos de kasherizarlo antes)."
      }
    ]
  },
  {
    categoria: "Sobre la Halaja",
    imagen: "/faq/halaja.jpg",
    preguntas: [
      {
        pregunta: "¿Siempre hay que decir una brajá antes de la tevila?",
        respuesta: "Si el utensilio es de metal o vidrio, sí. La brajá es:\n'Baruj Atá A-donai Elo-heinu Melej HaOlam Asher Kidshanu BeMitzvotav Vetzivanu Al Tevilat Kelim.'\nPara otros materiales dudosos, se sumerge sin decir brajá."
      }
    ]
  },
  {
    categoria: "Sobre la logistica",
    imagen: "/faq/logistica.jpg",
    preguntas: [
      {
        pregunta: "¿El servicio tiene costo?",
        respuesta: "No, Tevila It es un proyecto sin fines de lucro. Si querés colaborar, podés hacerlo de forma voluntaria para ayudar a mantener el servicio."
      },
      {
        pregunta: "¿Ofrecen retiro y entrega a domicilio?",
        respuesta: "No, usted se tiene que ocupar de que nso llegue mediante un punto de encuentro, la semana subsiguiente sus platos ya estaran listos para que los retiren ahí!. Consultanos al momento de hacer tu solicitud para coordinarlo."
      }
    ]
  }
];

// Colores personalizados basados en tu esquema
const colors = {
  primary: "#14b8a6", // Teal primario
  secondary: "#0d9488", // Teal oscuro/hover
  accent: "00000", // Texto primario (gris oscuro)
  light: "#e6fffa", // Teal muy claro
  dark: "#0f766e", // Teal más oscuro
  background: "#FFFFFF", // Fondo blanco
  text: "#2D3748" // Texto casi negro
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState({});

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setOpenQuestion(prev => {
      const key = `${categoryIndex}-${questionIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  const isQuestionOpen = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    return openQuestion[key] || false;
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.accent }}>
        Preguntas Frecuentes
      </h2>

      {/* Tabs para categorías */}
      <div className="flex flex-wrap mb-8 gap-2 justify-center">
        {data.map((category, categoryIndex) => (
          <button
            key={categoryIndex}
            onClick={() => setActiveCategory(categoryIndex)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === categoryIndex 
                ? 'text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            style={{ 
              backgroundColor: activeCategory === categoryIndex ? colors.primary : colors.light,
              borderLeft: activeCategory === categoryIndex ? `4px solid ${colors.dark}` : 'none'
            }}
          >
            {category.categoria}
          </button>
        ))}
      </div>

      {/* Contenedor de preguntas y respuestas */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen de categoría */}
          <div className="md:w-1/4 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center">
              <img
                src={data[activeCategory].imagen}
                alt={`${data[activeCategory].categoria} image`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Lista de preguntas */}
          <div className="md:w-3/4">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.primary }}>
              {data[activeCategory].categoria}
            </h3>
            
            <div className="space-y-4">
              {data[activeCategory].preguntas.map((item, questionIndex) => (
                <div 
                  key={questionIndex} 
                  className="border rounded-lg overflow-hidden transition-all duration-300"
                  style={{ 
                    borderColor: isQuestionOpen(activeCategory, questionIndex) ? colors.primary : colors.light 
                  }}
                >
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggleQuestion(activeCategory, questionIndex)}
                    style={{ backgroundColor: isQuestionOpen(activeCategory, questionIndex) ? colors.light : 'white' }}
                  >
                    <span className="font-medium" style={{ color: colors.accent }}>
                      {item.pregunta}
                    </span>
                    <span className="text-xl" style={{ color: colors.primary }}>
                      {isQuestionOpen(activeCategory, questionIndex) ? '−' : '+'}
                    </span>
                  </button>
                  
                  {isQuestionOpen(activeCategory, questionIndex) && (
                    <div className="p-4 bg-white border-t" style={{ borderColor: colors.light }}>
                      <p className="whitespace-pre-line">{item.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contacto adicional */}
      <div 
        className="text-center p-6 rounded-lg" 
        style={{ 
          
          color: 'white' 
        }}
      >
        <p className="mb-2 font-medium">
          ¿No encontraste lo que buscabas?
        </p>
       <a 
          href="https://wa.me/+5491123456789?text=Hola,%20tengo%20una%20consulta%20sobre%20Tevila%20It"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 rounded-lg text-teal-700 font-medium transition-all hover:shadow-lg bg-white hover:bg-gray-100"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="#25D366" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contactanos por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FAQ;