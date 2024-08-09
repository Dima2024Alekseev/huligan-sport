import React from "react";
import logo from "./img/footer-logo.png";
import { Link } from 'react-router-dom';
import { Icon16LogoVk } from '@vkontakte/icons';
import { BsTelegram } from "react-icons/bs";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-flex">
                    <div className="tipe-sport">
                        <div className="kinds-of-sports">
                            <div>
                                <a href="#" className="type-of-fight">Мма</a>
                            </div>
                            <div>
                                <a href="#" className="type-of-fight">Грэпплинг</a>
                            </div>
                            <div>
                                <a href="#" className="type-of-fight">Бокс</a>
                            </div>
                            <div>
                                <a href="#" className="type-of-fight">Кикбоксинг</a>
                            </div>
                        </div>
                        <div className="kinds-of-sports">
                            <div>
                                <a href="#" className="type-of-fight">Рукопашный бой</a>
                            </div>
                            <div>
                                <a href="#" className="type-of-fight">Каратэ</a>
                            </div>
                            <div>
                                <a href="#" className="type-of-fight">Женская самооборона</a>
                            </div>
                        </div>
                        <div className="header-components">
                            <div>
                                <Link to="/home" className="type-of-fight">Академия</Link>
                            </div>
                            <div>
                                <Link to="/schedule" className="type-of-fight">Расписание</Link>
                            </div>
                            <div>
                                <Link to="/events" className="type-of-fight">События</Link>
                            </div>
                        </div>
                        <div className="header-components">
                            <div>
                                <Link to="/precc-center" className="type-of-fight">Пресс-центр</Link>
                            </div>
                            <div>
                                <Link to="/online-store" className="type-of-fight">Интернет-магазин</Link>
                            </div>
                            <div>
                                <Link to="/price" className="type-of-fight">Цены</Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact-number">
                        <a className="contact-footer" href="tel:+79994451203">
                            <div>
                                <p>+7 (999) 445-12-03</p>
                            </div>
                        </a>
                        <a href="./waiting-list.html" className="list">
                            <div>
                                <p>Лист ожидания</p>
                            </div>
                        </a>
                        <div className="icons">
                            <a className="icons_1" target="_blank" rel="noopener noreferrer" href="https://vk.com/mmakansk">
                                <Icon16LogoVk width={30} height={30} fill="rgba(193, 193, 193, 0.628)" />
                            </a>
                            <a className="icons_1" target="_blank" rel="noopener noreferrer" href="https://t.me/mmakansk">
                                <BsTelegram size={24} fill="rgba(193, 193, 193, 0.628)" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="generalization">
                    <img className="logo-club" src={logo} alt="логотип" />
                    <span className="description">©Академия  боевых единоборств ХУЛИГАН, 2024</span>
                </div>
            </footer>
        )
    }
}

export default Footer