import React from "react";
import "./style/events.css";
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Footer from "./Components/Footer";


const Press = () => {
    useTitle("Пресс-центр", " ", "Пресс-центр", "Пресс-центр");
    return (
        <>
            <Otherheader />
            <Footer />
        </>
    );
};

export default Press;