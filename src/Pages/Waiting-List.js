import React from "react";
import "../style/profile.css";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Waiting = () => {
    return (
        <div id="inner">
            <Header
                title='Лист ожидания'
            />
            <main>
                <Form
                    showFields={{ name: true, lastname: true, phone: true, age: true, direction: true }}
                    formTitle='Форма заполнения заявки'
                    title_button='Отправить заявку'
                />
            </main>
            <Footer />
        </div>
    );
};

export default Waiting;
