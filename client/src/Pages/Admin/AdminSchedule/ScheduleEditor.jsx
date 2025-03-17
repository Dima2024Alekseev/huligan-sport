import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer/Footer";
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import "./admin-schedule.css";

const ScheduleEditor = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/schedule', {
          headers: {
            'Authorization': token
          }
        });
        setScheduleData(response.data);
      } catch (error) {
        console.error('Ваша сессия истекла', error);
        toast.error('Ваша сессия истекла');
      }
    };

    fetchSchedule();
  }, []);

  const handleChange = (index, field, value) => {
    const newSchedule = [...scheduleData];
    newSchedule[index][field] = value;
    setScheduleData(newSchedule);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/schedule', { schedule: scheduleData }, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Расписание обновлено');
    } catch (error) {
      console.error('Ваша сессия истекла', error);
      toast.error('Ваша сессия истекла');
    }
  };

  return (
    <>
      <Helmet>
        <title>Редактирование расписания</title>
        <meta name="description" content="Редактирование расписания" />
        <meta name="keywords" content="расписание, редактирование, администрирование" />
      </Helmet>
      <Header
        showBlock={true}
        innerTitle="Редактирование расписания"
        linkText="Редактирование расписания"
        showGradient={true} />
      <main className="schedule-editor-content">
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <th className="sticky-column-time">Время</th>
                <th>ПН</th>
                <th>ВТ</th>
                <th>СР</th>
                <th>ЧТ</th>
                <th>ПТ</th>
                <th>СБ</th>
              </tr>
              {scheduleData.map((row, index) => (
                <tr key={index}>
                  <td className="sticky-column-time"><input value={row.time} onChange={(e) => handleChange(index, 'time', e.target.value)} /></td>
                  <td><input value={row.pn} onChange={(e) => handleChange(index, 'pn', e.target.value)} /></td>
                  <td><input value={row.vt} onChange={(e) => handleChange(index, 'vt', e.target.value)} /></td>
                  <td><input value={row.sr} onChange={(e) => handleChange(index, 'sr', e.target.value)} /></td>
                  <td><input value={row.ct} onChange={(e) => handleChange(index, 'ct', e.target.value)} /></td>
                  <td><input value={row.pt} onChange={(e) => handleChange(index, 'pt', e.target.value)} /></td>
                  <td><input value={row.sb} onChange={(e) => handleChange(index, 'sb', e.target.value)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleSave}>Сохранить</button>
      </main>
      <Footer />
    </>
  );
};

export default ScheduleEditor;
