import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import "../style/schedule.css";

const ScheduleControl = ({ selectedCategory, selectedDay, handleCategoryChange, handleDayChange }) => {
  return (
    <section className="schedule_controler">
      <div className="schedule-mounth">
        <p>Категория:</p>
        <select className="schedule"  value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Выберите">Выберите</option>
          <option value="Дети соревновательная группа">Дети соревновательная группа</option>
          <option value="Дети средняя группа">Дети средняя группа</option>
          <option value="Дети младшая группа">Дети младшая группа</option>
          <option value="ММА взрослые">ММА взрослые</option>
          <option value="Женская группа">Женская группа</option>
        </select>
      </div>
      <div id="day" className="schedule-mounth">
        <p>День недели:</p>
        <select className="schedule" value={selectedDay} onChange={handleDayChange}>
          <option value="all">Все дни</option>
          <option value="pn">ПН</option>
          <option value="vt">ВТ</option>
          <option value="sr">СР</option>
          <option value="ct">ЧТ</option>
          <option value="pt">ПТ</option>
          <option value="sb">СБ</option>
        </select>
      </div>
    </section>
  );
};

const ScheduleTable = ({ scheduleData, selectedDay }) => {
  const days = ["pn", "vt", "sr", "ct", "pt", "sb"];
  const dayLabels = {
    pn: "ПН",
    vt: "ВТ",
    sr: "СР",
    ct: "ЧТ",
    pt: "ПТ",
    sb: "СБ"
  };

  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          {selectedDay === "all" ? days.map(day => <th key={day}>{dayLabels[day]}</th>) : <th>{dayLabels[selectedDay]}</th>}
        </tr>
        {scheduleData.map((row, index) => (
          <tr key={index}>
            <td><strong>{row.time}</strong></td>
            {selectedDay === "all" ? days.map(day => <td key={day}>{row[day]}</td>) : <td>{row[selectedDay]}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Schedule = () => {
  const [selectedCategory, setSelectedCategory] = useState("Выберите");
  const [selectedDay, setSelectedDay] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const scheduleData = [
    { time: "17:00", pn: "Дети соревновательная группа", vt: "", sr: "Дети соревновательная группа", ct: "", pt: "Дети соревновательная группа", sb: "" },
    { time: "18:00", pn: "", vt: "Дети младшая группа", sr: "", ct: "Дети младшая группа", pt: "", sb: "Дети средняя группа / Дети младшая группа" },
    { time: "19:00", pn: "ММА взрослые", vt: "Дети средняя группа", sr: "ММА взрослые", ct: "Дети средняя группа", pt: "ММА взрослые", sb: "" },
    { time: "19:30", pn: "", vt: "Женская группа", sr: "", ct: "Женская группа", pt: "", sb: "" },
  ];

  const filteredSchedule = scheduleData.filter(row => {
    if (selectedCategory !== "Выберите" && !Object.values(row).join(" ").includes(selectedCategory)) {
      return false;
    }
    return true;
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
          selectedDay={selectedDay}
          handleCategoryChange={handleCategoryChange}
          handleDayChange={handleDayChange}
        />
        <ScheduleTable scheduleData={filteredSchedule} selectedDay={selectedDay} />
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
