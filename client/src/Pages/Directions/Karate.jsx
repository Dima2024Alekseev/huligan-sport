import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import karate_video from "../../video/karate.MOV";

const Karate = () => {
    return (
        <>
            <Header
                videoBackgroundDirections={true}
                videoSrc={karate_video}
                showBlock={true}
                title="Каратэ"
                innerTitle="Каратэ"
                linkText="Каратэ"
            />
            <Footer />
        </>
    )
}

export default Karate;