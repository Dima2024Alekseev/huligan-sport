import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/header-icon.png";
import video from "./video/club_2.mp4";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Icon16LogoVk, Icon24UserSquare } from '@vkontakte/icons';
import { BsTelegram } from "react-icons/bs";




const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <header id="video-container">
            <video className="background-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className={
                nav ? ["header-flex", "active"].join(' ') : ["header-flex"]}>
                <Link to="/home">
                    <div>
                        <img className="logo-header" src={logo} alt="" />
                    </div>
                </Link>
                <Navbar/>
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
                        <a className="header-icons_1" href="https://vk.com/mmakansk">
                            <Icon16LogoVk width={30} height={30}/>
                        </a>
                        <a className="header-icons_1" href="https://t.me/mmakansk">
                            <BsTelegram size={24}/>
                        </a>
                    </div>
                </div>
                <a href="#">
                    <div className="personal-area">
                    <Icon24UserSquare fill="white" width={50} height={50}/>
                    </div>
                </a>

            </div>
            <MobileMenu nav={nav} setNav={setNav}/>
        </header>
    );
}

export default Header