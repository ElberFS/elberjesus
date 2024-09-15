import React from "react";
import "./Nav.css";

// Componente de navegación principal
const Nav = () => (
    <nav className="nav">
        <ul className="nav-list">
            {/* Elementos del menú de navegación */}
            {['home', 'skill', 'project', 'contact'].map((section, index) => (
                <li key={index} className="nav-item">
                    <a href={`#${section}`} className="nav-link">
                        {/* Texto visible en el menú */}
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
