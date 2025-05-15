import React from 'react';
import { Link } from "react-router-dom"; 

const Header = () => (
    <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }}>
      <Link to="/">
    <img
        src="/logoB.png"
        alt="Logo"
        style={{ width: 150, height: 80 }}
    />
</Link>


        {/* Puedes agregar aquí el título o cualquier otro contenido */}
    </header>
);

export default Header;