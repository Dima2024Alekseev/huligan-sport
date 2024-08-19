import React, { useState } from "react";
import "../style/shedule.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Schedule = () => {
  const [selectedCategory, setSelectedCategory] = useState("Выберите");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const scheduleData = [
    { time: "17:00", pn: "Дети соревновательная группа", vt: "", sr: "Дети соревновательная группа", ct: "", pt: "Дети соревновательная группа", sb: "" },
    { time: "18:00", pn: "", vt: "Дети младшая группа", sr: "", ct: "Дети младшая группа", pt: "", sb: "Дети средняя группа / Дети младшая группа" },
    { time: "19:00", pn: "ММА взрослые", vt: "Дети средняя группа", sr: "ММА взрослые", ct: "Дети средняя группа", pt: "ММА взрослые", sb: "" },
    { time: "19:30", pn: "", vt: "Женская группа", sr: "", ct: "Женская группа", pt: "", sb: "" },
  ];

  const filteredSchedule = scheduleData.map(row => {
    if (selectedCategory === "Выберите") {
      return row;
    }
    const filteredRow = {
      time: row.time,
      pn: row.pn.includes(selectedCategory) ? row.pn : "",
      vt: row.vt.includes(selectedCategory) ? row.vt : "",
      sr: row.sr.includes(selectedCategory) ? row.sr : "",
      ct: row.ct.includes(selectedCategory) ? row.ct : "",
      pt: row.pt.includes(selectedCategory) ? row.pt : "",
      sb: row.sb.includes(selectedCategory) ? row.sb : "",
    };
    return filteredRow;
  });

  return (
    <>
      <Header
        showGradient={true}
        title='Расписание'
        showBlock={true}
        innerTitle='расписание тренировок'
        linkText='Расписание'
      />
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
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="Выберите">Выберите</option>
              <option value="Дети соревновательная группа">Дети соревновательная группа</option>
              <option value="Дети средняя группа">Дети средняя группа</option>
              <option value="Дети младшая группа">Дети младшая группа</option>
              <option value="ММА взрослые">ММА взрослые</option>
              <option value="Женская группа">Женская группа</option>
            </select>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Время</th>
                <th>ПН</th>
                <th>ВТ</th>
                <th>СР</th>
                <th>ЧТ</th>
                <th>ПТ</th>
                <th>СБ</th>
              </tr>
              {filteredSchedule.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.time}</strong></td>
                  <td className="background">{row.pn}</td>
                  <td className="background">{row.vt}</td>
                  <td className="background">{row.sr}</td>
                  <td className="background">{row.ct}</td>
                  <td className="background">{row.pt}</td>
                  <td className="background">{row.sb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
