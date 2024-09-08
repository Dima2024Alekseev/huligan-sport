import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../style/price.css";

const Price = () => {
    return (
        <>
            <Header
                showGradient={true}
                title='Цены'
                showBlock={true}
                innerTitle='Абонемент'
                linkText='Цены' />
            <main className="training">
                <section className="subscription">
                    <div id="head-price">
                        <h1>3 000 ₽ </h1>
                        <h4>Дети/Взрослые</h4>
                    </div>
                    <div id="month-price">
                        <h4>30 дней</h4>
                    </div>
                    <div>
                        <p>Абонемент на месяц</p>
                    </div>
                </section>
                <section className="personally">
                    <div id="head-price">
                        <h1>1 200 ₽</h1>
                        <h4>Дети/Взрослые</h4>
                    </div>
                    <div>
                        <p>Персональная тренировка с тренером</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Price;
