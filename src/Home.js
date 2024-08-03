import React from "react";
import Header from "./Components/Header";
import NewsBlock from "./Components/News-Block";
import StoreBlock from "./Components/Store-Block";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";
import useTitle from "./Components/UseTitle";

const Home = () => {
    useTitle("Главная")
    return (
        <>
            <Header />
            <NewsBlock />
            <StoreBlock />
            <Contact />
            <Footer />

        </>
    );
};

export default Home;