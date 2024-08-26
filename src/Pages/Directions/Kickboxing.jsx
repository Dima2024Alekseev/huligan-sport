import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Kickboxing = () => {
    return (
        <>
            <Header
                showGradient={true}
                showBlock={true}
                title="Кикбоксинг"
                innerTitle="Кикбоксинг"
                linkText="Кикбоксинг"
            />
            <Footer />
        </>
    )
}

export default Kickboxing;