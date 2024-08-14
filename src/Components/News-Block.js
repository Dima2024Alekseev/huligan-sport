import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/news-slider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

class NewsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: 'club'
        };
    }

    handleButtonClick = (button) => {
        this.setState({ activeButton: button });
    };

    render() {
        const { posts } = this.props;

        // Фильтрация постов, которые содержат фотографии
        const filteredPosts = posts.filter(post => post.photoUrls && post.photoUrls.length > 0);

        return (
            <div className="news-and-victory">
                <div className="news_button">
                    <div>
                        <button
                            className={`button-club ${this.state.activeButton === 'club' ? 'active' : ''}`}
                            onClick={() => this.handleButtonClick('club')}
                        >
                            НОВОСТИ АКАДЕМИИ
                        </button>
                    </div>
                    <div>
                        <button
                            className={`button-victory ${this.state.activeButton === 'victory' ? 'active' : ''}`}
                            onClick={() => this.handleButtonClick('victory')}
                        >
                            НАШИ ПОБЕДЫ
                        </button>
                    </div>
                </div>
                <div className="content">

                    {this.state.activeButton === 'club' && (
                        <div className="container-news">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={2}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {filteredPosts.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <div className="content-news">
                                            <img src={post.photoUrls[0]} alt={`Photo 1`} style={{ maxWidth: '100%', margin: '10px 0' }} />
                                            <p>{post.text}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                    {this.state.activeButton === 'victory' && (
                        <div className="container-victory">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={2}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {filteredPosts.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <div className="content-news">
                                            <img src={post.photoUrls[0]} alt={`Photo 1`} style={{ maxWidth: '100%', margin: '10px 0' }} />
                                            <p>{post.text}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}

                    <div className="button-all">
                        <Link to="/precc-center">
                            <div className="next">
                                <p>Посмотреть все</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsBlock;
