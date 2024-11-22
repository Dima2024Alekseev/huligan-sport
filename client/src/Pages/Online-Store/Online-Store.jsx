import React, { useState } from "react";
import "./online-store.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import item from "../../img/item1.jpg";
import item_2 from "../../img/item2.jpg";
import item_3 from "../../img/item3.jpg";
import item_4 from "../../img/item4.jpg";
import item_5 from "../../img/item5.jpg";
import Modal from "../../Components/Modal Window/Modal";

const Store = () => {
    const [modalActive, setModalActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalActive(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalActive(false);
    };
    const OrderClick = () => {
        window.open("https://t.me/bychkov1203", "_blank");
    };

    return (
        <>
            <Header
                showGradient={true}
                showBlock={true}
                title="Интернет-магазин"
                innerTitle="Интернет-магазин"
                linkText="Интернет-магазин"
            />
            <main className="content-item">
                <section>
                    <div className="item-name-price">
                        <img onClick={() => openModal(item)} src={item} alt="" />
                        <p>Кепка<br />1 000 ₽</p>
                        <button onClick={OrderClick}>Заказать</button>
                    </div>
                </section>
                <section>
                    <div className="item-name-price">
                        <img onClick={() => openModal(item_2)} src={item_2} alt="" />
                        <p>Бейсболка<br />1 000 ₽</p>
                        <button onClick={OrderClick}>Заказать</button>
                    </div>
                </section>
                <section>
                    <div className="item-name-price">
                        <img onClick={() => openModal(item_3)} src={item_3} alt="" />
                        <p>Обновленная форма<br />3 000 ₽</p>
                        <button onClick={OrderClick}>Заказать</button>
                    </div>
                </section>
                <section>
                    <div className="item-name-price">
                        <img onClick={() => openModal(item_4)} src={item_4} alt="" />
                        <p>Футболка "Хулиган"<br />1 500 ₽</p>
                        <button onClick={OrderClick}>Заказать</button>
                    </div>
                </section>
                <section>
                    <div className="item-name-price">
                        <img onClick={() => openModal(item_5)} src={item_5} alt="" />
                        <p>Комплект формы<br />3 000 ₽</p>
                        <button onClick={OrderClick}>Заказать</button>
                    </div>
                </section>
            </main>
            <Footer />
            <Modal active={modalActive} setActive={closeModal} imageSrc={selectedImage} />
        </>
    );
};

export default Store;
