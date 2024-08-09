import React from "react";
import "./style/events.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from "./Components/Form";

const Authorization = () => {
    
    return (
        <>
            <Header
            title='Авторизация аккаунта'
            showGradient={true}/>
            <Form
                showFields={{ email: true, password: true, confirmPassword: true }}
                formTitle='Авторизация'
            />
            <Footer />
        </>
    );
};

export default Authorization;