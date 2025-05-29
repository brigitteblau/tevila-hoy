import { useState, useEffect } from 'react';

export default function TevilaCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen  p-8 flex items-center justify-center">
      <div className={`w-full md:w-1/2 flex justify-center transform transition-all duration-700 delay-200 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="relative group" style={{ perspective: '1000px' }}>
          {/* Sombra sutil detrás de la imagen */}
          <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/50 to-blue-100/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          {/* Contenedor con flip 3D corregido */}
          <div 
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Card container que rota */}
            <div 
              className="relative w-full h-full"
            >
              {/* Frente - Imagen mejorada */}
              <div 
                className="w-full bg-white rounded-xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Imagen principal con SVG de respaldo mejorado */}
                <div className="w-full h-60 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  
                  {/* SVG de respaldo más atractivo */}
                  <svg width="280" height="200" viewBox="0 0 200 150" className="text-teal-600">
                    {/* Contenedor/cuenco */}
                    <ellipse cx="100" cy="120" rx="80" ry="20" fill="currentColor" fillOpacity="0.2"/>
                    <ellipse cx="100" cy="115" rx="75" ry="18" fill="none" stroke="currentColor" strokeWidth="2"/>
                    
                    {/* Agua con ondas */}
                    <path d="M30 115 Q50 110 70 115 T110 115 Q130 110 150 115 T170 115" 
                          fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
                    <path d="M35 118 Q55 113 75 118 T115 118 Q135 113 155 118 T175 118" 
                          fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
                    
                    {/* Utensilios siendo sumergidos */}
                    <rect x="85" y="60" width="4" height="40" fill="currentColor" fillOpacity="0.7" rx="2"/>
                    <rect x="95" y="70" width="8" height="3" fill="currentColor" fillOpacity="0.7" rx="1"/>
                    <rect x="105" y="65" width="4" height="35" fill="currentColor" fillOpacity="0.7" rx="2"/>
                    
                    {/* Burbujas/gotas */}
                    <circle cx="70" cy="100" r="2" fill="currentColor" fillOpacity="0.3"/>
                    <circle cx="130" cy="105" r="1.5" fill="currentColor" fillOpacity="0.4"/>
                    <circle cx="90" cy="95" r="1" fill="currentColor" fillOpacity="0.5"/>
                    
                    {/* Texto mejorado */}
                    <text x="100" y="40" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">Tevilá</text>
                    <text x="100" y="58" textAnchor="middle" fill="#64748b" fontSize="14">ritual de purificación</text>
                  </svg>
                  
                  {/* Elementos decorativos adicionales */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/3 left-6 w-2 h-2 bg-teal-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Texto descriptivo debajo de la imagen */}
                <div className={`mt-6 text-center transition-all duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Proceso de purificación</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Se sumergen los utensillos que están en contacto con la comida a una pileta ritual.
                  </p>
                  
                  {/* Indicador de interactividad */}
                  <div className="mt-4 text-xs text-teal-600 font-medium opacity-75">
                    ✨ Haz clic para más información
                  </div>
                </div>
              </div>

              {/* Reverso - Información adicional */}
              <div className={`absolute inset-0 p-8 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-xl transition-all duration-500 ${
                isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                <div className="h-full flex flex-col justify-center text-center space-y-4">
                  <div className="text-3xl">🌊</div>
                  <h3 className="text-xl font-bold">¿Qué es la Tevilá?</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Es la inmersión ritual de utensilios de cocina que están en contacto con comida con el fin de purificarlos. Se le hace a todo utensillo proviniente de un no judio. 
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium bg-white/20 rounded-full px-3 py-1 inline-block">
                      De nuestros antepasados a nosotros
                    </div>
                    <div className="text-xs text-teal-100 mt-4">
                      ✨ Haz clic para volver
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}