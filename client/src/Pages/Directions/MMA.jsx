import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import mmaVideo from "../../video/mma_test.mp4";

const Mma = () => {
    return (
        <>
            <Header
                showBlock={true}
                title="MMA"
                innerTitle="MMA"
                linkText="MMA"
                videoBackgroundDirections={true}
                videoSrc={mmaVideo}
            />
            <Footer />
        </>
    )
}

export default Mma;
