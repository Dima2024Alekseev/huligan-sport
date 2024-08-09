import React from "react";
import "./style/events.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from "./Components/Form";

const Registration = () => {
    return (
        <div id="inner">
            <Header
                title='Регистрация аккаунта'
            />
            <Form
                showFields={{ name: true, lastname: true, birthdate: true, email: true, password: true, confirmPassword: true }}
                formTitle='Регистрация'
            />
            <Footer />
        </div>
    );
};

export default Registration;
