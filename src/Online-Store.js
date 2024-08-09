import React from "react";
import "./style/events.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const Store = () => {
    return (
        <>
            <Header
                showGradient={true}
                showBlock={true}
                title="Интернет-магазин"
                innerTitle="Интернет-магазин"
                linkText="Интернет-магазин"
            />
            <Footer />
        </>
    );
};

export default Store;