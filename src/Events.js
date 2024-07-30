import React from "react";
import "./style/events.css"
import useTitle from "./Components/UseTitle";
import Other_header from "./Components/Other_Header";
import Footer from "./Components/Footer";


const Events = () => {
    useTitle("События")
    return(
        <>
        <Other_header/>
        <div>
            <h1>Hello, Git !!!</h1>
        </div>
        <Footer/>
        </>
    );
};

export default Events;