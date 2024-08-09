import React from "react";
import "./style/events.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Registration = () => {

    return (
        <>
            <Header
                title='Регистрация аккаунта'
                showGradient={true}
                showForm={true}
                formTitle='Регистрация'
                formFields={{ name: true, lastname: true, birthdate: true, email: true, password: true, confirmPassword: true }} />
            <Footer />
        </>
    );
};

export default Registration;