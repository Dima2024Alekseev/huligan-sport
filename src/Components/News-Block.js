import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                    <div className="controls-news">
                        <svg id="leftbtn-news" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                        </svg>
                        {this.state.activeButton === 'club' && (
                            <div className="container-news">
                                <div className="gallery">
                                    <div>
                                        <div>
                                            <img src="https://sun9-19.userapi.com/impg/eErTra7Z9wj1uENjekXWpqm-J5L2mCE4VYec6A/5r-IutrXwcw.jpg?size=604x453&quality=95&sign=4ffcdd849a58ef48f1641c4f442b48b0&c_uniq_tag=7PQyKu1w7vya8jb_63oKm3t-sbCjQVuWKU6RIsmyFTQ&type=album" alt="" />
                                            <p>Состоялся турнир по ММА в Академии боевых единоборств «Хулиган» который собрал более 60 участников
                                                Выражаем благодарность нашим гостям приехавшим поддержать турнир Роман Лукьянов Володя Ирландец</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://sun9-74.userapi.com/impg/CGVAS6Akz8RToKebHQkMwfiggmvtq-svdYpQXw/6DKkPOSaHvU.jpg?size=807x605&quality=95&sign=377b3d5809562580660cc4d43329be6e&c_uniq_tag=8tfHZpmo510gRGTKFFv3osxIq2vXZHd4ZHoZYCu3Jxw&type=album" alt="" />
                                        <div>
                                            <p>11.02.2024 турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                                В турнире приняло участие около 90 спортсменов из п. Абан, г. Иланского, г. Тайшета и г. Канска</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://sun9-73.userapi.com/impg/f3ReOgVWSCz38c6A_BfWd2odi0PBkFhniGZaOw/cgV6CXQvIOg.jpg?size=605x807&quality=95&sign=31374681a373634a299a80d743f59dd4&c_uniq_tag=L_fqikDGb3nZ4WY_RTsNCUKqa6nnFbiQ2hDhVLjO0jY&type=album" alt="" />
                                        <div>
                                            <p>Сегодня в рамках турнира “Kuzbass open” по косики каратэ сборная Сибири, в состав которой был включен боец и тренер академии Бычков Антон, одержала победу над сборной Кузбасса со счетом 3:</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {this.state.activeButton === 'victory' && (
                            <div className="container-victory">
                                <div className="gallery">
                                    <div>
                                        <div>
                                            <img src="https://sun4-20.userapi.com/s/v1/ig2/K_1cCMxB8cyrK6ds2Ytzg7SEOM38Jb8tLxjHFdJjxQo7urVFEodcmhpvfCC65SQj5dLxGoxDTI0_vRnq2_8apwqu.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=SwCe4SMTUL1gSlyvgMZtBB_ws2Zi7ywVWAAf2NY69NQ&cs=604x453" alt="" />
                                            <p>Состоялся турнир по ММА в Академии боевых единоборств «Хулиган» который собрал более 60 участников
                                                Выражаем благодарность нашим гостям приехавшим поддержать турнир Роман Лукьянов Володя Ирландец</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://sun4-20.userapi.com/s/v1/ig2/K_1cCMxB8cyrK6ds2Ytzg7SEOM38Jb8tLxjHFdJjxQo7urVFEodcmhpvfCC65SQj5dLxGoxDTI0_vRnq2_8apwqu.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=SwCe4SMTUL1gSlyvgMZtBB_ws2Zi7ywVWAAf2NY69NQ&cs=604x453" alt="" />
                                        <div>
                                            <p>11.02.2024 турнир по грэпплингу в Академии боевых единоборств «Хулиган»
                                                В турнире приняло участие около 90 спортсменов из п. Абан, г. Иланского, г. Тайшета и г. Канска</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://sun4-20.userapi.com/s/v1/ig2/K_1cCMxB8cyrK6ds2Ytzg7SEOM38Jb8tLxjHFdJjxQo7urVFEodcmhpvfCC65SQj5dLxGoxDTI0_vRnq2_8apwqu.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=SwCe4SMTUL1gSlyvgMZtBB_ws2Zi7ywVWAAf2NY69NQ&cs=604x453" alt="" />
                                        <div>
                                            <p>Сегодня в рамках турнира “Kuzbass open” по косики каратэ сборная Сибири, в состав которой был включен боец и тренер академии Бычков Антон, одержала победу над сборной Кузбасса со счетом 3:</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <svg id="rightbtn-news" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                        </svg>
                    </div>
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
