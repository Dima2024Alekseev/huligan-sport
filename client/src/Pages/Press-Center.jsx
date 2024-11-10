import React from "react";
import "../style/press-center.css";
import Header from "../Components/Header";
import Posts from "../Components/Post";
import Footer from "../Components/Footer/Footer";

const Press = () => {
    return (
        <>
            <Header
                title="Пресс-центр"
                showBlock={true}
                innerTitle="Пресс-центр"
                linkText="Пресс-центр"
                showGradient={true}
            />
            <div className="news-container">
                <Posts />
            </div>
            <Footer />
        </>
    );
};

export default Press;
