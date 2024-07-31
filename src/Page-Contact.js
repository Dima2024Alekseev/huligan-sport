import React from "react";
import useTitle from "./Components/UseTitle";
import Other_header from "./Components/Other_Header";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";

const Page_Contact = () => {
    useTitle("Контакты", "", "Контактная информация", "Контакты")
    return (
        <>
            <Other_header />
            <Contact />
            <Footer />
        </>
    );
};

export default Page_Contact;
