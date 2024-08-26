import React from "react";
import "../style/profile.css";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Registration = () => {

    return (
        <div id="inner">
            <Header
                title='Регистрация аккаунта'
            />
            <main>
                <Form
                    showFields={{ name: true, lastname: true, birthdate: true, email: true, password: true, confirmPassword: true }}
                    formTitle='Регистрация'
                    title_button='Зарегистрироваться'
                />
            </main>
            <Footer />
        </div>
    );
};

export default Registration;
