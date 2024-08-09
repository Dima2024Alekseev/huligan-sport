import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const About = () => {

    return (
        <>
            <Header
                title="об Академии"
                showBlock={true}
                innerTitle="об Академии"
                linkText="об Академии"
                showGradient={true}
            />
            <div>
                <h1>О клубе </h1>
                <p>Проверка связи </p>
            </div>
            <Footer />
        </>
    );
};

export default About;
