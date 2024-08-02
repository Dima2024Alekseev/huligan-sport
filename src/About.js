import React from "react";
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Footer from "./Components/Footer";

const About = () => {
    useTitle("Об Академии", "", "Об Академии", "Об Академии")
    return (
        <>
            <Otherheader />
            <div>
                <h1>О клубе </h1>
                <p>Проверка связи </p>
            </div>
            <Footer />
        </>
    );
};

export default About;
