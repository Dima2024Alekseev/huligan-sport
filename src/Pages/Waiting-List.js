import React from "react";
import "../style/events.css";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Waiting = () => {
    return (
        <div id="inner">
            <Header
                title='Лист ожидания'
            />
            <Form
                showFields={{ name: true, lastname:true, phone: true, age: true, direction: true }}
                formTitle='Форма заполнения заявки'
                title_button = 'Отправить заявку'
            />
            <Footer />
        </div>
    );
};

export default Waiting;
