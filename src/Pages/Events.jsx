import React from "react";
import "../style/events.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";


const Events = () => {
    return (
        <>
            <Header
                title="События"
                showBlock={true}
                showGradient={true}
                innerTitle="События Академии"
                linkText="События"
            />
            <Footer />
        </>
    );
};

export default Events;