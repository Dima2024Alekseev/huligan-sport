import React from "react";
import { Link } from 'react-router-dom';
import logo from "./img/header-icon.png";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { Icon16LogoVk, Icon24UserSquare } from '@vkontakte/icons';
import { BsTelegram } from "react-icons/bs";


const Otherheader = () => {
    const [nav, setNav] = useState(false);
    useEffect(() => {
        const inner = document.getElementById('inner');
        let angle = 0;
        let direction = 1; // 1 для увеличения, -1 для уменьшения

        function updateGradient() {
            angle += direction;

            // Изменяем направление, когда угол достигает 150 или 50 градусов
            if (angle >= 250) {
                direction = -0.5;
            } else if (angle <= 50) {
                direction = 0.5;
            }

            inner.style.background = `linear-gradient(${angle}deg, #000000 50%, rgba(125, 186, 232, 0) 100%), url(https://rcc-sport.ru/local/templates/main/img/bg-red.png) top right, #121212`;
            requestAnimationFrame(updateGradient);
        }

        updateGradient();

        // Очистка анимации при размонтировании компонента
        return () => {
            cancelAnimationFrame(updateGradient);
        };
    }, []);
    return (
        <header id="inner">
            <div className="container-events">
                <div className={
                    nav ? ["header-flex", "active"].join(' ') : ["header-flex"]}>
                    <Link to="/home">
                        <div>
                            <img className="logo-header" src={logo} alt="" />
                        </div>
                    </Link>
                    <Navbar />
                    <Link to="/price">
                        <div className="price_button">
                            <p>Цены</p>
                        </div>
                    </Link>
                    <div className="header-contact">
                        <a href="tel:+79994451203" id="list-header">
                            <div>
                                <h3>+7 (999) 445-12-03</h3>
                            </div>
                        </a>
                        <a href="#" id="list-header">
                            <div>
                                <p>Лист ожидания</p>
                            </div>
                        </a>
                        <div className="header-icons">
                            <a className="header-icons_1" target="_blank" rel="noopener noreferrer" href="https://vk.com/mmakansk">
                                <Icon16LogoVk width={30} height={30} />
                            </a>
                            <a className="header-icons_1" target="_blank" rel="noopener noreferrer" href="https://t.me/mmakansk">
                                <BsTelegram size={24} />
                            </a>
                        </div>
                    </div>
                    <Link to="/personal-account">
                        <div className="personal-area">
                            <Icon24UserSquare fill="white" width={50} height={50} />
                        </div>
                    </Link>
                </div>
                <MobileMenu nav={nav} setNav={setNav} />
                <div className="content">
                    <div className="title">
                        <h1></h1>
                    </div>
                    <div className="links">
                        <div style={{ borderRight: '1px solid white', paddingRight: '10px' }}>
                            <Link to="/home">Главная</Link>
                        </div>
                        <div>
                            <Link to="#" style={{ color: 'white', paddingLeft: '10px' }}></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Otherheader;