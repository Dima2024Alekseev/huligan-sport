import React from "react";
import "./style/events.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

const Waiting = () => {
    return (
        <div id="inner">
            <Header
                title='Лист ожидания'
            />
            <Form
                showFields={{ name: true, lastname: true, birthdate: true, email: true, password: true, confirmPassword: true }}
                formTitle='Форма для заполнения заявки'
            />
            <Footer />
        </div>
    );
};

export default Waiting;
