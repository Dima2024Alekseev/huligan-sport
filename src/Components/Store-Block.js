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
import logo_5 from "./img/item6.jpg";


class StoreBlock extends React.Component {
    render() {
        return (
            <div className="online-store">
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='content-store'>
                            <img src={logo} />
                            <p>Кепка<br /><strong>1 000 ₽</strong></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-store'>
                            <img src={logo_2} />
                            <p>Бейсболка<br /><strong>1 000 ₽</strong></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-store'>
                            <img src={logo_3} />
                            <p>Обновленный комплект формы<br /><strong>3 000 ₽</strong></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-store'>
                            <img src={logo_4} />
                            <p>Футболка "Хулиган"<br /><strong>1 500 ₽</strong></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-store'>
                            <img src={logo_5} />
                            <p>Комплект формы<br /><strong>3 000 ₽</strong></p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="store-button">
                    <Link to="/online-store" >
                        <div id="button-style">
                            <p>В магазин</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StoreBlock