import React from "react";
import "../style/press-center.css"
import Header from "../Components/Header";
import Post from "../Components/Post"
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
            <main>
            <Post/>
            </main>
            <Footer />
        </>
    );
};

export default Press;