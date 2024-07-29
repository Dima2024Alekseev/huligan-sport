import React from "react";
import "./style/price.css";
import Other_header from "./Components/Other_Header";
import Footer from "./Components/Footer";

const Price = () => {
    return (
        <>
            <Other_header />
            <main>
                <div class="training">
                    <div class="subscription">
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
                    <div class="personally">
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
