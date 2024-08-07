import React from "react";
import "./style/events.css"
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Footer from "./Components/Footer";
import Posts from "./Components/Post";


const Events = () => {
    useTitle("События", " ", "События Академии", "События");
    return (
        <>
            <Otherheader />
            <Posts/>
            <Footer />
        </>
    );
};

export default Events;