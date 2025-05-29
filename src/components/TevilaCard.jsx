import { useState, useEffect } from 'react';

export default function TevilaCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full px-4 md:px-0 flex justify-center">
      <div className={`w-full max-w-sm sm:max-w-md transform transition-all duration-700 delay-200 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="relative group cursor-pointer" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
          {/* Sombra decorativa */}
          <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/50 to-blue-100/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

          {/* Card */}
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {/* Frente */}
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-full h-56 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <svg width="280" height="200" viewBox="0 0 200 150" className="text-teal-600">
                  <ellipse cx="100" cy="120" rx="80" ry="20" fill="currentColor" fillOpacity="0.2"/>
                  <ellipse cx="100" cy="115" rx="75" ry="18" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 115 Q50 110 70 115 T110 115 Q130 110 150 115 T170 115" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <path d="M35 118 Q55 113 75 118 T115 118 Q135 113 155 118 T175 118" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
                  <rect x="85" y="60" width="4" height="40" fill="currentColor" fillOpacity="0.7" rx="2"/>
                  <rect x="95" y="70" width="8" height="3" fill="currentColor" fillOpacity="0.7" rx="1"/>
                  <rect x="105" y="65" width="4" height="35" fill="currentColor" fillOpacity="0.7" rx="2"/>
                  <circle cx="70" cy="100" r="2" fill="currentColor" fillOpacity="0.3"/>
                  <circle cx="130" cy="105" r="1.5" fill="currentColor" fillOpacity="0.4"/>
                  <circle cx="90" cy="95" r="1" fill="currentColor" fillOpacity="0.5"/>
                  <text x="100" y="40" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">Tevilá</text>
                  <text x="100" y="58" textAnchor="middle" fill="#64748b" fontSize="14">ritual de purificación</text>
                </svg>

                {/* Decorativos */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 left-6 w-2 h-2 bg-teal-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Texto */}
              <div className={`mt-6 text-center transition-all duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Proceso de purificación</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Se sumergen los utensilios que están en contacto con la comida en una pileta ritual.
                </p>
                <div className="mt-4 text-xs text-teal-600 font-medium opacity-75">
                  ✨ Tocá para más información
                </div>
              </div>
            </div>

            {/* Reverso */}
            <div className={`absolute inset-0 p-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-xl transition-all duration-500 ${
              isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <div className="h-full flex flex-col justify-center text-center space-y-4">
                <div className="text-3xl">🌊</div>
                <h3 className="text-xl font-bold">¿Qué es la Tevilá?</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  Es la inmersión ritual de utensilios de cocina en contacto con alimentos. Se realiza a cualquier objeto comprado a un no judío.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-medium bg-white/20 rounded-full px-3 py-1 inline-block">
                    De nuestros antepasados a nosotros
                  </div>
                  <div className="text-xs text-teal-100 mt-4">
                    ✨ Tocá para volver
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
