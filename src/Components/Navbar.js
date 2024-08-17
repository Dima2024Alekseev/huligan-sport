import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="navigation">
                <li><Link to="/home">Академия</Link>
                    <ul>
                        <li><Link to="/about">об Академии</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                    </ul>
                </li>
                <li><Link to="#">Направления</Link>
                    <ul>
                        <li><Link to="#">ММА</Link></li>
                        <li><Link to="#">Грэпплинг</Link></li>
                        <li><Link to="#">Бокс</Link></li>
                        <li><Link to="#">Кикбоксинг</Link></li>
                        <li><Link to="#">Рукопашный бой</Link></li>
                        <li><Link to="#">Каратэ</Link></li>
                        <li><Link to="#">Женская самооборона</Link></li>
                    </ul>
                </li>
                <li><Link to="/schedule">Расписание</Link></li>
                <li><Link to="/events">События</Link></li>
                <li><Link to="/press-center">Пресс-центр</Link></li>
                <li><Link to="/online-store">Интернет-магазин</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;