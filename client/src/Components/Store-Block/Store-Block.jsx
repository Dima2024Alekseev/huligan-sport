import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './store-slider.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import axios from 'axios';

const StoreBlock = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setItems(response.data);
            } catch (error) {
                console.error('Ошибка при получении продуктов:', error);
            }
        };

        fetchItems();
    }, []);

    const hasEnoughSlides = items.length >= 3;

    return (
        <section className="online-store" aria-label="Интернет-магазин">
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3
                    }
                }}
                loop={hasEnoughSlides}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <article className='content-store'>
                            <div className="product-image-wrapper">
                                <img 
                                    src={`http://localhost:5000${item.image}`} 
                                    alt={item.text} 
                                    className="product-image"
                                />
                            </div>
                            <p>{item.text}<br /><strong>{item.price} ₽</strong></p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="store-button">
                <Link to="/online-store" className="button-style" aria-label="Перейти в магазин">
                    <p>В магазин</p>
                </Link>
            </div>
        </section>
    );
};

export default StoreBlock;