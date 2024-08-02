import React from "react";
import "./style/price.css";
import useTitle from "./Components/UseTitle";
import Otherheader from "./Components/OtherHeader";
import Footer from "./Components/Footer";

const Price = () => {
    useTitle("Цены", " ", "Абонемент", "Цены");
    return (
        <>
            <Otherheader />
            <main>
                <div className="training">
                    <div className="subscription">
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
                    </div>
                    <div className="personally">
                        <div id="head-price">
                            <h1>1 200 ₽</h1>
                            <h4>Дети/Взрослые</h4>
                        </div>
                        <div>
                            <p>Персональная тренировка с тренером</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Price;
