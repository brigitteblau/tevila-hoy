import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "var(--primary)", color: "var(--white)" }}
    >
      <img 
        src="/logoB.png" 
        alt="Logo Tevila It" 
        className="w-48 h-24 mb-4 animate-bounce" 
        style={{ maxWidth: '250px', maxHeight: '125px' }}
      />
      {/* <p>Cargando...</p> */}
    </motion.div>
  );
};

export default Loader;
