import React from "react";
import "./style/events.css";
import useTitle from "./Components/UseTitle";
import Footer from "./Components/Footer";
import HeaderProfile from "./Components/Header-Profile";

const Account = () => {
    useTitle("Интернет-магазин", " ", "Интернет-магазин", "Интернет-магазин");
    return (
        <>
            <HeaderProfile />
            <Footer />
        </>
    );
};

export default Account;