import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-information">
        <div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d897469566a332b4d1908c68eb7363ab50a0295acf74168d96606ecb5284dc9&amp;source=constructor" width="100%" height="500px" frameborder="0"></iframe>
        </div>
        <div className="width-contact">
          <div className="contact">
            <div className="info-contact">
              <h2 className="contact-title">Контакты</h2>
              <p className="contact-number-club">+7 (999) 445-12-03</p>
              <p className="address">г. Канск, улица 40 лет Октября, 62 ст 4, 2 этаж</p>
              <h2 className="schedule">Режим работы Академии</h2>
              <p className="mon-schedule">Понедельник - Cуббота: с 7.00 до 24.00</p>
              <p className="sun-schedule">Воскресенье: с 9.00 до 22.00</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact