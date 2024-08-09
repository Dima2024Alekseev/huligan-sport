import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul class="navigation">
                <li><Link to="/home">Академия</Link>
                    <ul>
                        <li><Link to="/about">об Академии</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                    </ul>
                </li>
                <li><a href="#">Направления</a>
                    <ul>
                        <li><a href="#">ММА</a></li>
                        <li><a href="#">Грэпплинг</a></li>
                        <li><a href="#">Бокс</a></li>
                        <li><a href="#">Кикбоксинг</a></li>
                        <li><a href="#">Рукопашный бой</a></li>
                        <li><a href="#">Каратэ</a></li>
                        <li><a href="#">Женская самооборона</a></li>
                    </ul>
                </li>
                <li><Link to="/schedule">Расписание</Link></li>
                <li><Link to="/events">События</Link></li>
                <li><Link to="/precc-center">Пресс-центр</Link></li>
                <li><Link to="/online-store">Интернет-магазин</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;