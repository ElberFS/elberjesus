import React from "react";
import "./Home.css";
import profileImage from '../../assets/img/profile.png';
import cv from '../../assets/pdf/CV_QuirozCoronelElberJesus.pdf';
import whatsappIcon from "../../assets/svg/whatsapp.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import telegramIcon from "../../assets/svg/telegram.svg";

// Componente principal de la sección "Home"
const Home = () => (
    <section id="home">
        <div className="home-container">
            <div className="home-content">
                {/* Imagen de perfil */}
                <img src={profileImage} alt="Foto de perfil" className="home-image" />

                {/* Texto de presentación */}
                <div className="home-text">
                    <h1>ELBER JESUS</h1>
                    <h2>Desarrollador Full Stack Backend</h2>
                    <p>
                        Soy un desarrollador con pasión por crear aplicaciones,
                        enfocándome en soluciones eficientes y adaptadas a las
                        necesidades del cliente.
                    </p>

                    {/* Botones de acción */}
                    <div className="buttons-container">
                        <a href={cv} target="_blank" rel="noopener noreferrer" className="preview-button">
                            Curriculum vitae
                        </a>

                        {/* Íconos de redes sociales */}
                        <div className="icons-container">
                            <a href="https://pe.linkedin.com/in/elber-jesus-quiroz-coronel-578021288" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                            </a>
                            <a href="https://t.me/ElberJesus" target="_blank" rel="noopener noreferrer">
                                <img src={telegramIcon} alt="telegram" className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Home;
