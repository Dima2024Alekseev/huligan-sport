import React from "react";
import useTitle from "./Components/UseTitle";
import Other_header from "./Components/Other_Header";
import Footer from "./Components/Footer";

const About = () => {
    useTitle("Об Академии")
    return (
        <>
            <Other_header />
            <div>
                <h1>О клубе </h1>
                <p>Проверка связи </p>
            </div>
            <Footer />
        </>
    );
};

export default About;
