import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/store-slider.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import logo from "./img/item1.jpg";
import logo_2 from "./img/item2.jpg";
import logo_3 from "./img/item3.jpg";
import logo_4 from "./img/item4.jpg";
import logo_5 from "./img/item5.jpg";

class StoreBlock extends React.Component {
    render() {
        const items = [
            { img: logo, text: 'Кепка', price: '1 000 ₽' },
            { img: logo_2, text: 'Бейсболка', price: '1 000 ₽' },
            { img: logo_3, text: 'Обновленный комплект формы', price: '3 000 ₽' },
            { img: logo_4, text: 'Футболка "Хулиган"', price: '1 500 ₽' },
            { img: logo_5, text: 'Комплект формы', price: '3 000 ₽' },
        ];

        return (
            <div className="online-store">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3
                        }
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='content-store'>
                                <img src={item.img} alt='' />
                                <p>{item.text}<br /><strong>{item.price}</strong></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="store-button">
                    <Link to="/online-store">
                        <div id="button-style">
                            <p>В магазин</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StoreBlock;
