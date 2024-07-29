import React from "react";
import Header from "./Components/Header";
import News_Block from "./Components/News-Block";
import Store_Block from "./Components/Store-Block";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";


const Home = () => {
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