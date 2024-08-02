import React from "react";
import "./style/events.css"
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Footer from "./Components/Footer";


const Events = () => {
    useTitle("События", " ", "События Академии", "События");
    return (
        <>
            <Otherheader />
            <div>
                <h1>Hello, Git !!!</h1>
            </div>
            <Footer />
        </>
    );
};

export default Events;