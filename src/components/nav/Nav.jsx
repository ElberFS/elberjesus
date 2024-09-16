import React from "react";
import "./Nav.css";

// Componente de navegación principal
const Nav = () => (
    <nav className="nav">
        <ul className="nav-list">
            {/* Elementos del menú de navegación */}
            {[
                { section: 'home', label: 'Inicio' },
                { section: 'skill', label: 'Habilidades' },
                { section: 'project', label: 'Proyectos' }
            ].map((item, index) => (
                <li key={index} className="nav-item">
                    <a href={`#${item.section}`} className="nav-link">
                        {/* Texto visible en el menú */}
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
