import React from "react";
import logo from "./img/footer-logo.png";
import { Link } from 'react-router-dom';
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-flex">
                    <div className="tipe-sport">
                        <div className="kinds-of-sports">
                            <div>
                                <Link to="#" className="type-of-fight">Мма</Link>
                            </div>
                            <div>
                                <Link to="#" className="type-of-fight">Грэпплинг</Link>
                            </div>
                            <div>
                                <Link to="#" className="type-of-fight">Бокс</Link>
                            </div>
                            <div>
                                <Link to="#" className="type-of-fight">Кикбоксинг</Link>
                            </div>
                        </div>
                        <div className="kinds-of-sports">
                            <div>
                                <Link to="#" className="type-of-fight">Рукопашный бой</Link>
                            </div>
                            <div>
                                <Link to="#" className="type-of-fight">Каратэ</Link>
                            </div>
                            <div>
                                <Link to="#" className="type-of-fight">Женская самооборона</Link>
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
                                <Link to="/press-center" className="type-of-fight">Пресс-центр</Link>
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
                        <Link to="/waiting-list" className="list">
                            <div>
                                <p>Лист ожидания</p>
                            </div>
                        </Link>
                        <div className="icons">
                            <a className="icons_1" target="_blank" rel="noopener noreferrer" href="https://vk.com/mmakansk">
                                <FaVk size={24} fill="rgba(193, 193, 193, 0.628)" />
                            </a>
                            <a className="icons_1" target="_blank" rel="noopener noreferrer" href="https://t.me/mmakansk">
                                <FaTelegram size={24} fill="rgba(193, 193, 193, 0.628)" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="generalization">
                    <img className="logo-club" src={logo}/>
                    <span className="description">©Академия  боевых единоборств ХУЛИГАН, 2024</span>
                </div>
            </footer>
        )
    }
}

export default Footer