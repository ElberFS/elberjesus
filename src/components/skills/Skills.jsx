import React from 'react';
import Slider from 'react-slick';
import './Skills.css';

// Importación de imágenes para cada sección de habilidades
import frontendImage from '../../assets/img/fronted.png';
import backendImage from '../../assets/img/backend.png';
import analysisImage from '../../assets/img/analysis.png';

// Importación de iconos de las tecnologías y herramientas
import excelIcon from '../../assets/svg/excel.svg';
import powerbiIcon from '../../assets/svg/powerbi.svg';
import gitIcon from '../../assets/svg/git.svg';
import reactIcon from '../../assets/svg/react.svg';
import cssIcon from '../../assets/svg/css.svg';
import htmllIcon from '../../assets/svg/html.svg';
import jsIcon from '../../assets/svg/js.svg';
import tailwindIcon from '../../assets/svg/tailwind.svg';
import mysqlIcon from '../../assets/svg/mysql.svg';
import laravelIcon from '../../assets/svg/laravel.svg';
import phpIcon from '../../assets/svg/php.svg';
import postgresqlIcon from '../../assets/svg/postgresql.svg';
import sqlIcon from '../../assets/svg/sql.svg';
import mongodbIcon from '../../assets/svg/mongodb.svg';

// Importación de estilos de la librería slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
    // Configuración del carrusel
    const settings = {
        dots: true, // Mostrar indicadores de página
        infinite: true, // Ciclar infinitamente entre los slides
        speed: 500, // Velocidad de transición en ms
        slidesToShow: 1, // Mostrar un slide a la vez
        slidesToScroll: 1, // Desplazarse de un slide a la vez
        autoplay: true, // Reproducir automáticamente
        autoplaySpeed: 3000, // Velocidad de reproducción automática en ms
        pauseOnHover: true, // Pausar reproducción automática al pasar el mouse sobre el slide
    };

    // Datos de habilidades con imágenes, descripciones y sus respectivos iconos
    const skills = [
        
        {
            image: frontendImage,
            title: 'Habilidades de Frontend',
            description: 'Tengo experiencia en diseño web utilizando tecnologías como HTML, CSS y JavaScript. También manejo frameworks como React, empleando Vite como servidor de desarrollo, y Tailwind para la creación de interfaces modernas y responsivas.',
            icons: [htmllIcon , cssIcon , jsIcon , tailwindIcon,reactIcon],
        },
        {
            image: backendImage,
            title: 'Habilidades de Backend',
            description: 'Tengo conocimientos en varios sistemas de gestión de bases de datos relacionales como SQL, MySQL y PostgreSQL, además de bases de datos no relacionales como MongoDB. También manejo PHP, un lenguaje de programación, y frameworks como Laravel, con el cual desarrollo APIs REST. Utilizo Git para la gestión de versiones en mis proyectos.',
            icons: [phpIcon , laravelIcon , mysqlIcon , sqlIcon , postgresqlIcon, mongodbIcon, gitIcon],
        } ,
        {
            image: analysisImage,
            title: 'Habilidades como Analista de datos',
            description: 'Tengo experiencia en análisis de datos utilizando herramientas como Power BI y Excel para la visualización y procesamiento de datos. Manejo técnicas de limpieza, transformación y análisis para obtener insights que apoyen la toma de decisiones estratégicas.',
            icons: [excelIcon , powerbiIcon],
        }
    ];

    return (
        <section id="skill">
            {/* Contenedor principal del carrusel */}
            <div className="skills-container">
                {/* Componente Slider con configuración */}
                <Slider {...settings}>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-slide">
                            <div className="skill-content">
                                {/* Imagen de la habilidad */}
                                <div className="skill-image">
                                    <img src={skill.image} alt={`Imagen de ${skill.title}`} />
                                </div>
                                {/* Información de la habilidad (título, descripción e iconos) */}
                                <div className="skill-info">
                                    <h3>{skill.title}</h3>
                                    <p>{skill.description}</p>
                                    <div className="skill-icons">
                                        {skill.icons.map((icon, idx) => (
                                            <img key={idx} src={icon} alt={`Icono ${skill.title} ${idx + 1}`} className="skill-icon" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Skills;
