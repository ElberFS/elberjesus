import React, { useRef, useState } from "react";
import "./Project.css";

// Imágenes de proyectos
import project1Image from '../../assets/img/project01.png';
import project2Image from '../../assets/img/GestorTareasProject.png';
import project3Image from '../../assets/img/ColegioPorject.png';
import project4Image from '../../assets/img/reparacionProject.png';

// Iconos de tecnologías e interfaz
import htmlIcon from "../../assets/svg/html.svg";
import cssIcon from "../../assets/svg/css.svg";
import jsIcon from "../../assets/svg/js.svg";
import githubIcon from "../../assets/svg/github.svg";
import leftArrow from "../../assets/svg/left-arrow.svg";
import rightArrow from "../../assets/svg/right-arrow.svg";
import filterIcon from "../../assets/svg/filter.svg";
import reactIcon from '../../assets/svg/react.svg';
import tailwindIcon from '../../assets/svg/tailwind.svg';
import mysqlIcon from '../../assets/svg/mysql.svg';
import laravelIcon from '../../assets/svg/laravel.svg';
import phpIcon from '../../assets/svg/php.svg';
import bootstrapIcon from '../../assets/svg/bootstrap.svg';

const Project = () => {
    // Estado para las tecnologías seleccionadas y la visibilidad de los filtros
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    // Lista de proyectos de frontend
    const frontendProjects = [
        {
            title: "Portafolio Web",
            image: project1Image,
            description: "Portafolio creado desde cero con React y Vite. Se utilizaron HTML, CSS y JavaScript para la estructura, el estilo y la interactividad. React facilita la creación de componentes dinámicos y Vite acelera el desarrollo.",
            icons: [reactIcon, htmlIcon, jsIcon, cssIcon],
            link: "https://github.com/ElberFS/elberjesus.git"
        },
        {
            title: "Gestión de Tareas API",
            image: project2Image,
            description: "API Rest simple hecha con Laravel, utilizando MySQL como base de datos, con funciones como registrar, editar, actualizar y eliminar.",
            icons: [laravelIcon , phpIcon , mysqlIcon ],
            link: "https://github.com/ElberFS/GestorTareas.git"
        },
        {
            title: "Gestor de Área de Soportes",
            image: project3Image,
            description: "(Activo) Proyecto en Laravel con base de datos en MySQL, utilizando Tailwind y Blade para las vistas. Este proyecto sistematiza el proceso de soporte, desde la solicitud de una reparación hasta la entrega de esta.",
            icons: [laravelIcon , phpIcon ,tailwindIcon, mysqlIcon ],
            link: "https://github.com/ElberFS/Sistema_Historial_Equipo.git"
        },
        {
            title: "Sistema de Colegio",
            image: project4Image,
            description: "Sistema desarrollado sin frameworks, utilizando solo PHP, HTML, CSS y JavaScript. Gestiona la asistencia, evaluaciones, cursos, docentes y horarios, con base de datos en phpMyAdmin de MySQL.",
            icons: [phpIcon, htmlIcon, jsIcon, cssIcon, bootstrapIcon],
            link: "https://github.com/ElberFS/Sistema-Web-Academico-main.git"
        }
        
        // Más proyectos pueden añadirse aquí...
    ];

    // Referencia para el scroll del carrusel de proyectos
    const projectListRef = useRef(null);

    // Función para hacer scroll hacia la izquierda
    const scrollLeft = () => {
        const cardWidth = projectListRef.current.querySelector('.project-card').offsetWidth;
        const gap = parseInt(window.getComputedStyle(projectListRef.current).gap) || 0;
        projectListRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
    };

    // Función para hacer scroll hacia la derecha
    const scrollRight = () => {
        const cardWidth = projectListRef.current.querySelector('.project-card').offsetWidth;
        const gap = parseInt(window.getComputedStyle(projectListRef.current).gap) || 0;
        projectListRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    };

    // Función para agregar o quitar una tecnología del filtro
    const toggleTechnology = (tech) => {
        setSelectedTechnologies(selectedTechnologies.includes(tech) 
            ? selectedTechnologies.filter(t => t !== tech) 
            : [...selectedTechnologies, tech]
        );
    };

    // Filtrar proyectos por tecnologías seleccionadas
    const filteredProjects = frontendProjects.filter(project =>
        selectedTechnologies.every(tech => project.icons.includes(tech))
    );

    return (
        <section id="project" className="project-section">
            <h2>Proyectos Personales</h2>

            {/* Contenedor de filtro de tecnologías */}
            <div className="filter-container">
                <button className="filter-button" onClick={() => setShowFilters(!showFilters)}>
                    <img src={filterIcon} alt="Filtrar" style={{ width: "30px", height: "30px" }} />
                </button>

                {/* Mostrar u ocultar filtros */}
                {showFilters && (
                    <div className="tech-filters">
                        {[htmlIcon, cssIcon, jsIcon, reactIcon].map((icon, index) => (
                            <img
                                key={index}
                                src={icon}
                                alt={`Icono de ${icon}`}
                                onClick={() => toggleTechnology(icon)}
                                className={selectedTechnologies.includes(icon) ? "selected" : ""}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Carrusel de proyectos */}
            <div className="project-carousel">
                <button className="scroll-button left" onClick={scrollLeft}>
                    <img src={leftArrow} alt="Scroll Izquierda" style={{ width: "35px", height: "35px" }} />
                </button>

                {/* Lista de proyectos con filtrado */}
                <div className="project-list" ref={projectListRef}>
                    {(filteredProjects.length > 0 ? filteredProjects : frontendProjects).map((project, index) => (
                        <div key={index} className="project-card">
                            <h4 className="project-title">{project.title}</h4>
                            <img className="project-image" src={project.image} alt={project.title} />
                            <p className="project-description">{project.description}</p>

                            {/* Iconos de tecnologías usadas */}
                            <div className="tech-icons">
                                {project.icons.map((icon, i) => (
                                    <img key={i} src={icon} alt="Icono de tecnología" />
                                ))}
                            </div>

                            {/* Enlace a GitHub */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    ))}
                </div>

                <button className="scroll-button right" onClick={scrollRight}>
                    <img src={rightArrow} alt="Scroll Derecha" style={{ width: "35px", height: "35px" }} />
                </button>
            </div>
        </section>
    );
};

export default Project;
