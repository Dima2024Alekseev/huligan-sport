import React from "react";
import "./style/events.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Authorization = () => {
    
    return (
        <>
            <Header
            title='Авторизация аккаунта'
            showForm={true}
            showGradient={true}
            formTitle='Авторизация'
            formFields={{ email: true, password: true, confirmPassword: true }}
             />
            <Footer />
        </>
    );
};

export default Authorization;