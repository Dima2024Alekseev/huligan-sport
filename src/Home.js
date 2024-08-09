import React from "react";
import Header from "./Components/Header";
import NewsBlock from "./Components/News-Block";
import StoreBlock from "./Components/Store-Block";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";

const Home = () => {
    return (
        <>
            <Header 
            showVideo={true}
            title="Хулиган. Академия боевых единоборств"
            />
            <NewsBlock />
            <StoreBlock />
            <Contact />
            <Footer />

        </>
    );
};

export default Home;