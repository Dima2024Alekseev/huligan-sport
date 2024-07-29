import React from "react";
import "./style/style.css";
import "./style/shedule.css";
import Other_header from "./Components/Other_Header";
import Footer from "./Components/Footer";

const Schedule = () => {
    return(
        <>
        <Other_header/>
        <main>
        <div class="container-events">
            <div class="events-next">
                <p>Месяц:</p>
                <select>
                    <option value="option1">Май</option>
                    <option value="option2">Июнь</option>
                </select>
            </div>
            <div class="events-next">
                <p>Неделя:</p>
                <select>
                    <option value="option1">Текущие</option>
                    <option value="option2">Прошлое</option>
                </select>
            </div>
            <div class="events-next">
                <p>Категория:</p>
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
        <table>
            <tr>
              <th>Время</th>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
              <th>СБ</th>
            </tr>
            <tr>
              <td>17:00</td>
              <td id="background">Детисоревновательная группа</td>
              <td id="background"></td>
              <td id="background">Детисоревновательная группа</td>
              <td id="background"></td>
              <td id="background">Детисоревновательная группа</td>
              <td id="background"></td>
            </tr>
            <tr>
              <td>18:00</td>
              <td id="background"></td>
              <td id="background">Дети младшая группа</td>
              <td id="background"></td>
              <td id="background">Дети младшая группа</td>
              <td id="background"></td>
              <td id="background">Дети средняя группа /Дети младшая группа</td>
            </tr>
            <tr>
              <td>19:00</td>
              <td id="background">ММА взрослые</td>
              <td id="background">Дети средняя группа</td>
              <td id="background">ММА взрослые</td>
              <td id="background">Дети средняя группа</td>
              <td id="background">ММА взрослые</td>
              <td id="background"></td>
            </tr>
            <tr>
              <td>19:30</td>
              <td id="background"></td>
              <td id="background">Женская группа</td>
              <td id="background"></td>
              <td id="background">Женская группа</td>
              <td id="background"></td>
              <td id="background"></td>
            </tr>
          </table>
          
    </main>
        <Footer/>
        </>
    );
};

export default Schedule;
