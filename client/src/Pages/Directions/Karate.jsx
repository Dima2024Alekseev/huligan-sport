import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";

const Karate = () => {
    return (
        <>
            <Header
                showGradient={true}
                showBlock={true}
                title="Каратэ"
                innerTitle="Каратэ"
                linkText="Каратэ"
            />
            <Footer />
        </>
    )
}

export default Karate;