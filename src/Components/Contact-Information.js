import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-information">
        <YMaps>
          <div id="map" style={{ width: "100%", height: "500px" }}>
            <Map
              defaultState={{
                center: [56.231338, 95.700804],
                zoom: 17,
              }}
              width="100%"
              height="100%"
            />
          </div>
        </YMaps>
        <div className="width-contact">
          <div className="contact">
            <div className="info-contact">
              <h2 className="contact-title">Контакты</h2>
              <p className="contact-number-club">+7 (999) 445-12-03</p>
              <p className="address">г. Канск, улица 40 лет Октября, 62 ст 4 2 этаж</p>
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