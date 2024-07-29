import React from "react";
import logo from "./img/footer-logo.png";
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
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
                                <Link to="/" className="type-of-fight">Академия</Link>  
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
                                <a href="./press-center.html" className="type-of-fight">Пресс-центр</a> 
                            </div>
                            <div>
                                <a href="./online-store.html" className="type-of-fight">Интернет-магазин</a> 
                            </div>
                            <div>
                                <Link to="/price" className="type-of-fight">Цены</Link> 
                            </div>
                        </div>
                    </div>
                    <div className="contact-number">
                        <a className="contact-footer" href="tel:+79994451203" target="_blank">
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
                            <a className="icons_1" href="https://vk.com/mmakansk" target="_blank">
                                <svg className="social"  version="1.1" xmlns="http://www.w3.org/2000/svg" width="31" height="28" viewBox="0 0 31 28">
                                    <title>vk</title>
                                        <path d="M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z"></path>
                                </svg>                                            
                            </a>
                            <a className="icons_1" href="https://t.me/mmakansk" target="_blank">
                                <svg className="social"  version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                    <title>telegram</title>
                                        <path d="M18.578 20.422l2.297-10.828c0.203-0.953-0.344-1.328-0.969-1.094l-13.5 5.203c-0.922 0.359-0.906 0.875-0.156 1.109l3.453 1.078 8.016-5.047c0.375-0.25 0.719-0.109 0.438 0.141l-6.484 5.859-0.25 3.563c0.359 0 0.516-0.156 0.703-0.344l1.687-1.625 3.5 2.578c0.641 0.359 1.094 0.172 1.266-0.594zM28 14c0 7.734-6.266 14-14 14s-14-6.266-14-14 6.266-14 14-14 14 6.266 14 14z"></path>
                                </svg>
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