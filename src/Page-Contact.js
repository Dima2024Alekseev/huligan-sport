import React from "react";
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";

const Page_Contact = () => {
    useTitle("Контакты", "", "Контактная информация", "Контакты")
    return (
        <>
            <Otherheader />
            <Contact />
            <Footer />
        </>
    );
};

export default Page_Contact;
