import React from "react";
import "./style/events.css";
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Footer from "./Components/Footer";


const Store = () => {
    useTitle("Интернет-магазин", " ", "Интернет-магазин", "Интернет-магазин");
    return (
        <>
            <Otherheader />
            <Footer />
        </>
    );
};

export default Store;