import { useState } from "react";

// Los datos de preguntas frecuentes
const data = [
  {
    categoria: "Sobre el servicio",
    imagen: "/img/faq/servicio.jpeg",
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
    imagen: "/img/faq/utensillos.png",
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
    imagen: "/img/faq/halaja.jpg",
    preguntas: [
      {
        pregunta: "¿Siempre hay que decir una brajá antes de la tevila?",
        respuesta: "Si el utensilio es de metal o vidrio, sí. La brajá es:\n'Baruj Atá A-donai Elo-heinu Melej HaOlam Asher Kidshanu BeMitzvotav Vetzivanu Al Tevilat Kelim.'\nPara otros materiales dudosos, se sumerge sin decir brajá."
      }
    ]
  },
  {
    categoria: "Sobre la logistica",
    imagen: "/img/faq/logistica.jpg",
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
  accent: "#2D3748", // Texto primario (gris oscuro)
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
          {/* Decoración en lugar de imagen */}
          <div className="md:w-1/4 flex items-center justify-center">
            <div 
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{ 
                background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.dark})`, 
                border: `3px solid ${colors.light}` 
              }}
            >
              <span className="text-4xl font-bold text-white">
                {data[activeCategory].categoria.charAt(0)}
              </span>
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
          background: `linear-gradient(to right, ${colors.primary}, ${colors.dark})`, 
          color: 'white' 
        }}
      >
        <p className="mb-2 font-medium">
          ¿No encontraste lo que buscabas?
        </p>
        <button 
          className="px-6 py-2 rounded-lg text-teal-700 font-medium transition-all hover:shadow-lg bg-white hover:bg-gray-100"
        >
          Contactanos
        </button>
      </div>
    </div>
  );
};

export default FAQ;