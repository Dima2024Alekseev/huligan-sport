import React, { useState } from "react";
import "../style/schedule.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ScheduleControl = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <section className="schedule_controler">
      <div className="schedule-mounth">
        <p>Месяц:</p>
        <select className="schedule">
          <option value="option1">Май</option>
          <option value="option2">Июнь</option>
        </select>
      </div>
      <div className="schedule-mounth">
        <p>Неделя:</p>
        <select className="schedule">
          <option value="option1">Текущие</option>
          <option value="option2">Прошлое</option>
        </select>
      </div>
      <div className="schedule-mounth">
        <p>Категория:</p>
        <select className="schedule" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Выберите">Выберите</option>
          <option value="Дети соревновательная группа">Дети соревновательная группа</option>
          <option value="Дети средняя группа">Дети средняя группа</option>
          <option value="Дети младшая группа">Дети младшая группа</option>
          <option value="ММА взрослые">ММА взрослые</option>
          <option value="Женская группа">Женская группа</option>
        </select>
      </div>
    </section>
  );
};

const ScheduleTable = ({ scheduleData }) => {
  return (
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
        {scheduleData.map((row, index) => (
          <tr key={index}>
            <td><strong>{row.time}</strong></td>
            <td>{row.pn}</td>
            <td>{row.vt}</td>
            <td>{row.sr}</td>
            <td>{row.ct}</td>
            <td>{row.pt}</td>
            <td>{row.sb}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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

  const filteredSchedule = scheduleData.filter(row => {
    if (selectedCategory === "Выберите") {
      return true;
    }
    const combinedRow = Object.values(row).join(" ");
    return combinedRow.includes(selectedCategory);
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
      <main className="schedule-content">
        <ScheduleControl
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <ScheduleTable scheduleData={filteredSchedule} />
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
