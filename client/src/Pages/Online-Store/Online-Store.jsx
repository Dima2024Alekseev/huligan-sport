import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./online-store.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal Window/Modal";

const Store = () => {
    const [products, setProducts] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Ошибка при получении продуктов:', error);
            }
        };

        fetchProducts();
    }, []);

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
                {products.map(product => (
                    <section key={product._id}>
                        <div className="item-name-price">
                            <img
                                onClick={() => openModal(`http://localhost:5000${product.image}`)}
                                src={`http://localhost:5000${product.image}`}
                                alt={product.text}
                            />
                            <p>{product.text}<br />{product.price} ₽</p>
                            <button onClick={OrderClick}>Заказать</button>
                        </div>
                    </section>
                ))}
            </main>
            <Footer />
            <Modal active={modalActive} setActive={closeModal} imageSrc={selectedImage} />
        </>
    );
};

export default Store;
