import React, { useState } from 'react';

const Repa = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        isOpen && (
            <div 
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeModal}
            >
                <div 
                    className="bg-white p-8 w-11/12 max-w-2xl text-center shadow-lg relative animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="text-2xl font-bold mb-5 tracking-wider">
                        🚧 Página en reparación 🚧
                    </h2>
                    <div className="mb-5">
                        <b><p>Estamos trabajando en mejoras :)</p></b>  
                        <p>Si necesitas ayuda o que te pasemos alguna prueba en específico, puedes contactarnos en:</p>
                        <strong>
                            <a 
                                href="mailto:manda.tuspruebas@gmail.com" 
                                className="text-blue-500 hover:underline"
                            >
                                manda.tuspruebas@gmail.com
                            </a>
                        </strong>
                    </div>
                    <button 
                        className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600 transition"
                        onClick={closeModal}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        )
    );
};

export default Repa;
