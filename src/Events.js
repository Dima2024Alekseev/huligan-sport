import React from "react";
import "./style/events.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Posts from "./Components/Post";


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
            <Posts />
            <Footer />
        </>
    );
};

export default Events;