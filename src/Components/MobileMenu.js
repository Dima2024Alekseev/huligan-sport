import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Icon24UserSquare } from '@vkontakte/icons';
import logo from "./img/header-icon.png";

const MobileMenu = ({ nav, setNav }) => {
    return (
        <div className="position-mobile-logo-and-menu">
            <Link to="/home">
                <div className="logo-mobile">
                    <img className="logo-header" src={logo} alt="" />
                </div>
            </Link>
            <div className="profile-menu-number">
                <div className="menu-profile-flex">
                    <div onClick={() => setNav(!nav)} className="mobile_btn">
                        {nav ? <AiOutlineClose color="white" size={40} /> : <AiOutlineMenu color="white" size={40} />}
                    </div>
                    <Link to= '/registration-account'>
                    <div className="mobile-profile">
                        <Icon24UserSquare fill="white" width={50} height={50} />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;