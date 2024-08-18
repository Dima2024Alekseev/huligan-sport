import React from "react";
import Header from "../Components/Header";
import Contact from "../Components/Contact-Information";
import Footer from "../Components/Footer";

const PageContact = () => {
    return (
        <>
            <Header
            showGradient={true}
            showBlock={true}
            title='Контакты'
            innerTitle='Контактная информация'
            linkText='Контакты' />
            <Contact />
            <Footer />
        </>
    );
};

export default PageContact;
