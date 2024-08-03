import React from "react";


class NewsBlock extends React.Component {
    render() {
        return (
            <div className="news-and-victory">
                <div className="news_button">
                    <div>
                        <button className="button-club">НОВОСТИ АКАДЕМИИ</button>
                    </div>
                    <div>
                        <button className="button-victory">НАШИ ПОБЕДЫ</button>
                    </div>
                </div>
                <div className="content">
                    <div className="controls-news">
                        <svg id="leftbtn-news" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                        </svg>
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
                        <svg id="rightbtn-news" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                        </svg>
                    </div>
                    <div className="button-all">
                    <a href="./press-center.html">
                        <div className="next">
                            <p>Посмотреть все</p>
                        </div>
                    </a>
                </div>
                </div>
                
            </div>
        )
    }
}

export default NewsBlock