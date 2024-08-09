import React from "react";
import "./style/events.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from "./Components/Form";

const Authorization = () => {

    return (
        <div id="inner">
            <Header
                title='Авторизация аккаунта' />
            <Form
                showFields={{ email: true, password: true, confirmPassword: true }}
                formTitle='Авторизация'
            />
            <Footer />
        </div>
    );
};

export default Authorization;