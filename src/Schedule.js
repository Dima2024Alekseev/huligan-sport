import React from "react";
import "./style/shedule.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Schedule = () => {
  return (
    <>
      <Header
      showGradient={true}
      title='Расписание'
      showBlock={true}
      innerTitle='расписание тренировок'
      linkText= 'Расписание'/>
      <div className="schedule-content">
        <div className="Schedule_Controler">
          <div className="shedule-option">
            <p style={{ color: "rgba(0, 0, 0, 0.466)" }}>Месяц:</p>
            <select className="shedule">
              <option value="option1">Май</option>
              <option value="option2">Июнь</option>
            </select>
          </div>
          <div className="shedule-option">
            <p style={{ color: "rgba(0, 0, 0, 0.466)" }}>Неделя:</p>
            <select>
              <option value="option1">Текущие</option>
              <option value="option2">Прошлое</option>
            </select>
          </div>
          <div className="shedule-option">
            <p style={{ color: "rgba(0, 0, 0, 0.466)" }}>Категория:</p>
            <select>
              <option value="option1">Выберите</option>
              <option value="option2">Дети соревновательная группа</option>
              <option value="option2">Дети средняя группа</option>
              <option value="option2">Дети младшая группа</option>
              <option value="option2">ММА взрослые</option>
              <option value="option2">Женская группа</option>
            </select>
          </div>
        </div>
        <div>
          <table>
            <tbody><tr>
              <th>Время</th>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
              <th>СБ</th>
            </tr>
              <tr>
                <td><strong>17:00</strong></td>
                <td className="background">Дети<br />соревновательная группа</td>
                <td className="background"></td>
                <td className="background">Дети<br />соревновательная группа</td>
                <td className="background"></td>
                <td className="background">Дети<br />соревновательная группа</td>
                <td className="background"></td>
              </tr>
              <tr>
                <td><strong>18:00</strong></td>
                <td className="background"></td>
                <td className="background">Дети младшая группа</td>
                <td className="background"></td>
                <td className="background">Дети младшая группа</td>
                <td className="background"></td>
                <td className="background">Дети средняя группа /<br />Дети младшая группа</td>
              </tr>
              <tr>
                <td><strong>19:00</strong></td>
                <td className="background">ММА взрослые</td>
                <td className="background">Дети средняя группа</td>
                <td className="background">ММА взрослые</td>
                <td className="background">Дети средняя группа</td>
                <td className="background">ММА взрослые</td>
                <td className="background"></td>
              </tr>
              <tr>
                <td><strong>19:30</strong></td>
                <td className="background"></td>
                <td className="background">Женская группа</td>
                <td className="background"></td>
                <td className="background">Женская группа</td>
                <td className="background"></td>
                <td className="background"></td>
              </tr>
            </tbody></table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
