import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbUserSquareRounded } from "react-icons/tb";
import logo from "./img/header-icon.png";

const MobileMenu = ({ nav, setNav }) => {
    return (
        <div className="position-mobile-logo-and-menu">
            <Link to="/home">
                <div className="logo-mobile">
                    <img className="logo-header" alt="" src={logo}/>
                </div>
            </Link>
            <div className="profile-menu-number">
                <div className="menu-profile-flex">
                    <div onClick={() => setNav(!nav)} className="mobile_btn">
                        {nav ? <AiOutlineClose color="white" size={40} /> : <AiOutlineMenu color="white" size={40} />}
                    </div>
                    <Link to= '/registration-account'>
                    <div className="mobile-profile">
                        <TbUserSquareRounded color="white" size={40}/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;