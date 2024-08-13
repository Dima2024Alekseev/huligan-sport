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
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun4-18.userapi.com/s/v1/ig2/du7eB8kkxeGfFcM1-wMmfS9M8hK6CRy9DG9gM77JC8mC9ErOR7c0p807vdUD_FG3sUvaznxiQqMSw4DnOa_8raZm.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=euhcwqxddIGzfNrWof4l9dzPiU9wn8P8wWm6vGnqJTI&cs=807x605' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun4-18.userapi.com/s/v1/ig2/du7eB8kkxeGfFcM1-wMmfS9M8hK6CRy9DG9gM77JC8mC9ErOR7c0p807vdUD_FG3sUvaznxiQqMSw4DnOa_8raZm.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=euhcwqxddIGzfNrWof4l9dzPiU9wn8P8wWm6vGnqJTI&cs=807x605' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun4-18.userapi.com/s/v1/ig2/du7eB8kkxeGfFcM1-wMmfS9M8hK6CRy9DG9gM77JC8mC9ErOR7c0p807vdUD_FG3sUvaznxiQqMSw4DnOa_8raZm.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=euhcwqxddIGzfNrWof4l9dzPiU9wn8P8wWm6vGnqJTI&cs=807x605' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun4-18.userapi.com/s/v1/ig2/du7eB8kkxeGfFcM1-wMmfS9M8hK6CRy9DG9gM77JC8mC9ErOR7c0p807vdUD_FG3sUvaznxiQqMSw4DnOa_8raZm.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=euhcwqxddIGzfNrWof4l9dzPiU9wn8P8wWm6vGnqJTI&cs=807x605' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun4-18.userapi.com/s/v1/ig2/du7eB8kkxeGfFcM1-wMmfS9M8hK6CRy9DG9gM77JC8mC9ErOR7c0p807vdUD_FG3sUvaznxiQqMSw4DnOa_8raZm.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=euhcwqxddIGzfNrWof4l9dzPiU9wn8P8wWm6vGnqJTI&cs=807x605' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
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
                                    delay: 8000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun9-66.userapi.com/s/v1/ig2/dRpk9vWvw7Zv3Jci-zmZKQjzvjEUU4wNa50DewX1hUYxL-GJ8ePVzMXmXwv48rtSb10rbdUz5On1Cv06lTjAbzUG.jpg?quality=95&as=32x24,48x36,72x55,108x82,160x121,240x182,360x273,480x363,540x409,640x485,720x545,1080x818,1240x939&from=bu&u=GO883H06stwAFMkotz4_4uXgn6pIGU7fkLedk_203Yg&cs=807x611' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun9-66.userapi.com/s/v1/ig2/dRpk9vWvw7Zv3Jci-zmZKQjzvjEUU4wNa50DewX1hUYxL-GJ8ePVzMXmXwv48rtSb10rbdUz5On1Cv06lTjAbzUG.jpg?quality=95&as=32x24,48x36,72x55,108x82,160x121,240x182,360x273,480x363,540x409,640x485,720x545,1080x818,1240x939&from=bu&u=GO883H06stwAFMkotz4_4uXgn6pIGU7fkLedk_203Yg&cs=807x611' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun9-66.userapi.com/s/v1/ig2/dRpk9vWvw7Zv3Jci-zmZKQjzvjEUU4wNa50DewX1hUYxL-GJ8ePVzMXmXwv48rtSb10rbdUz5On1Cv06lTjAbzUG.jpg?quality=95&as=32x24,48x36,72x55,108x82,160x121,240x182,360x273,480x363,540x409,640x485,720x545,1080x818,1240x939&from=bu&u=GO883H06stwAFMkotz4_4uXgn6pIGU7fkLedk_203Yg&cs=807x611' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun9-66.userapi.com/s/v1/ig2/dRpk9vWvw7Zv3Jci-zmZKQjzvjEUU4wNa50DewX1hUYxL-GJ8ePVzMXmXwv48rtSb10rbdUz5On1Cv06lTjAbzUG.jpg?quality=95&as=32x24,48x36,72x55,108x82,160x121,240x182,360x273,480x363,540x409,640x485,720x545,1080x818,1240x939&from=bu&u=GO883H06stwAFMkotz4_4uXgn6pIGU7fkLedk_203Yg&cs=807x611' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-news">
                                        <img src='https://sun9-66.userapi.com/s/v1/ig2/dRpk9vWvw7Zv3Jci-zmZKQjzvjEUU4wNa50DewX1hUYxL-GJ8ePVzMXmXwv48rtSb10rbdUz5On1Cv06lTjAbzUG.jpg?quality=95&as=32x24,48x36,72x55,108x82,160x121,240x182,360x273,480x363,540x409,640x485,720x545,1080x818,1240x939&from=bu&u=GO883H06stwAFMkotz4_4uXgn6pIGU7fkLedk_203Yg&cs=807x611' />
                                        <p>🤼‍♂30.06.24 состоялся турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                            🤝Выражаем благодарность тренерам и спортсменам, которые поддержали наш турнир</p>
                                    </div>
                                </SwiperSlide>
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
