import React from 'react';
import './Footer.css';
import twitterIcon from '../../assets/svg/twitter.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import telegramIcon from '../../assets/svg/telegram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">"Imagina, programa y crea el futuro."</p>
            <div className="footer-links">
                <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="twitter" className="footer-icon" /> 
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" /> 
                </a>
                <a href="https://telegram.me/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className="footer-icon" /> 
                </a>
            </div>
            <p className="footer-rights">Todos los derechos reservados</p>
        </footer>
    );
}

export default Footer;
