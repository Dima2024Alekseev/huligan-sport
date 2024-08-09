import React from "react";
import "./style/events.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from "./Components/Form";

const Registration = () => {
    return (
        <>
            <Header
                title='Регистрация аккаунта'
                showGradient={true}
            />
            <Form
                showFields={{ name: true, lastname: true, birthdate: true, email: true, password: true, confirmPassword: true }}
                formTitle='Регистрация'
            />
            <Footer />
        </>
    );
};

export default Registration;
