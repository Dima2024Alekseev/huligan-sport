import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


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
            <Footer />
        </>
    );
};

export default About;
