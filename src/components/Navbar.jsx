import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="navbar" id="app-navbar">
      <div className="nav-logo">
        <Logo className="logo-icon floating-icon" />
        <span>La Caserita</span>
      </div>

      <ul className="nav-links">
        <li><a href="#inicio" className="nav-link">Inicio</a></li>
        <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
        <li><a href="#carta" className="nav-link">La Carta</a></li>
        <li><a href="#contacto" className="nav-link">Contacto</a></li>
      </ul>
    </nav>
  );
}
