import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "./img/header-icon.png";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { TbUserSquareRounded } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import useTitle from './UseTitle';
import video from "./video/club_2.mp4"

const Header = ({ title, icon, innerTitle, linkText, showVideo, showGradient, showBlock }) => {
  useTitle(title, icon, innerTitle, linkText);

  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (showGradient) {
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
    }
  }, [showGradient]);

  return (
    <div id={showGradient ? "inner" : ""}>
      <header id={showVideo ? "video-container" : ""}>
        {showVideo && (
          <video className="background-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        )}
        {showVideo && <div className="overlay"></div>}
        <div>
          <div className={nav ? ["header-flex", "active"].join(' ') : ["header-flex"]}>
            <Link to="/home">
              <div>
                <img className="logo-header" alt="" src={logo}/>
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
              <Link to="/waiting-list" id="list-header">
                <div>
                  <p>Лист ожидания</p>
                </div>
              </Link>
              <div className="header-icons">
                <a className="header-icons_1" target="_blank" rel="noopener noreferrer" href="https://vk.com/mmakansk">
                   <FaVk className="social-network" size={24} />
                </a>
                <a className="header-icons_1" target="_blank" rel="noopener noreferrer" href="https://t.me/mmakansk">
                  <FaTelegram className="social-network" size={24} />
                </a>
              </div>
            </div>
            <Link to="/registration-account">
              <div className="personal-area">
                <TbUserSquareRounded className="profile-icon" size={45} color="white" />
              </div>
            </Link>
          </div>
          <MobileMenu nav={nav} setNav={setNav} />
        </div>
      </header>
      {showBlock && <div className="content">
        <div className="title">
          <h1>Title Header</h1>
        </div>
        <div className="links">
          <div style={{ borderRight: '1px solid white', paddingRight: '10px' }}>
            <Link to="/home">Главная</Link>
          </div>
          <div>
            <Link to="#" style={{ color: 'white', paddingLeft: '10px' }}></Link>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Header;
