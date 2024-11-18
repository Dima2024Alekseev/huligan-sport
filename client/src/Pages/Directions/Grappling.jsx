import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import grappling_video from "../../video/grappling.MP4";

const Grappling = () => {
    return (
        <>
            <Header
                videoBackgroundDirections={true}
                videoSrc={grappling_video}
                showBlock={true}
                title="Грэпплинг"
                innerTitle="Грэпплинг"
                linkText="Грэпплинг"
            />
            <Footer />
        </>
    )
}

export default Grappling;