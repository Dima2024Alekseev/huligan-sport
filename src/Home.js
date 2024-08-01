import React from "react";
import "./style/style.css"
import Header from "./Components/Header";
import News_Block from "./Components/News-Block";
import Store_Block from "./Components/Store-Block";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";
import useTitle from "./Components/UseTitle";

const Home = () => {
    useTitle("Главная")
    return (
        <>
            <Header />
            <News_Block />
            <Store_Block />
            <Contact />
            <Footer />

        </>
    );
};

export default Home;