import React from "react";
import "./style/events.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

const Authorization = () => {

    return (
        <div id="inner">
            <Header
                title='Авторизация аккаунта' />
            <Form
                showFields={{ email: true, password: true, confirmPassword: true }}
                formTitle='Авторизация'
                title_button = 'Войти'
            />
            <Footer />
        </div>
    );
};

export default Authorization;