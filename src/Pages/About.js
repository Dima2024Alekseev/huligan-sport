import React from "react";
import "../style/about.css";
import Header from "../Components/Header";
import photo_founder from "../Components/img/founder.jpg";
import coach from "../Components/img/head-coach.jpg";
import Footer from "../Components/Footer";


const About = () => {

    return (
        <>
            <Header
                title="об Академии"
                showBlock={true}
                innerTitle="об Академии"
                linkText="об Академии"
                showGradient={true}
            />
            <main>
                <section>
                    <div className="position-title-photo">
                        <img src={photo_founder} alt="Фото основателя" />
                        <div>
                            <h2>Бычков Сергей Валерьевич</h2>
                            <h3>Основатель Академии боевых единоборств "Хулиган"</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="position-title-photo">
                        <img src={coach} alt="Фото главного тренера" />
                        <div>
                            <h2>Бычков Антон Сергеевич</h2>
                            <h3>Главный тренер</h3>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
