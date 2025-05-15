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
    </header>
);

export default Header;