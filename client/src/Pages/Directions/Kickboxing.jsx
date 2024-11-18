import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import boxing_and_kickboxing_video from "../../video/boxing_and_kickboxing.MOV";

const Kickboxing = () => {
    return (
        <>
            <Header
                videoBackgroundDirections={true}
                videoSrc={boxing_and_kickboxing_video}
                showBlock={true}
                title="Кикбоксинг"
                innerTitle="Кикбоксинг"
                linkText="Кикбоксинг"
            />
            <Footer />
        </>
    )
}

export default Kickboxing;