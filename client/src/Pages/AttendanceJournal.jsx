import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import "../style/attendance-journal.css"; // Импорт CSS стилей

const AttendanceJournal = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newEntry, setNewEntry] = useState({ studentName: '', group: 'group1', month: new Date().getMonth() + 1, attendance: {}, days: [] });
  const [selectedGroup, setSelectedGroup] = useState('group1');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Текущий месяц по умолчанию
  const [daysToDisplay, setDaysToDisplay] = useState([]); // Начальные числа месяца
  const [newDay, setNewDay] = useState('');

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/attendance', {
          params: { group: selectedGroup, month: selectedMonth }
        });
        setAttendanceData(response.data);
        const days = response.data.flatMap(entry => entry.days);
        setDaysToDisplay([...new Set(days)].sort((a, b) => a - b)); // Удаление дубликатов и сортировка
        console.log('Загруженные данные:', response.data);
      } catch (error) {
        console.error('Ошибка при получении данных посещаемости:', error);
      }
    };

    const checkAdmin = () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(decodedToken.role === 'admin');
      }
    };

    fetchAttendanceData();
    checkAdmin();
  }, [selectedGroup, selectedMonth]);

  const handleChange = (index, field, value) => {
    const newAttendanceData = [...attendanceData];
    if (field.includes('attendance.')) {
      const day = field.split('.')[1];
      newAttendanceData[index].attendance[day] = value;
    } else {
      newAttendanceData[index][field] = value;
    }
    setAttendanceData(newAttendanceData);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const updatedEntries = attendanceData.map(entry => ({
        ...entry,
        month: selectedMonth,
        days: daysToDisplay // Добавьте дни к каждой записи
      }));
      await axios.put('http://localhost:5000/api/attendance', { attendance: updatedEntries }, {
        headers: {
          'Authorization': token
        }
      });
      alert('Журнал посещаемости обновлен');
    } catch (error) {
      console.error('Ошибка при обновлении журнала посещаемости:', error);
    }
  };

  const handleAddEntry = async () => {
    try {
      const token = localStorage.getItem('token');
      const newEntryWithMonth = {
        ...newEntry,
        month: parseInt(newEntry.month, 10),
        days: daysToDisplay // Добавьте дни к новой записи
      };
      await axios.post('http://localhost:5000/api/attendance', newEntryWithMonth, {
        headers: {
          'Authorization': token
        }
      });
      setAttendanceData([...attendanceData, newEntryWithMonth]);
      setNewEntry({ studentName: '', group: 'group1', month: new Date().getMonth() + 1, attendance: {}, days: [] });
      alert('Запись добавлена');
    } catch (error) {
      console.error('Ошибка при добавлении записи:', error);
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/attendance/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      setAttendanceData(attendanceData.filter(entry => entry._id !== id));
      alert('Запись удалена');
    } catch (error) {
      console.error('Ошибка при удалении записи:', error);
    }
  };

  const handleAddDay = () => {
    if (newDay && !daysToDisplay.includes(parseInt(newDay, 10))) {
      setDaysToDisplay([...daysToDisplay, parseInt(newDay, 10)].sort((a, b) => a - b));
      setNewDay('');
      console.log('Добавлен новый день:', newDay);
    }
  };

  const handleRemoveDay = (day) => {
    setDaysToDisplay(daysToDisplay.filter(d => d !== day).sort((a, b) => a - b));
    console.log('Удален день:', day);
  };

  const renderAttendanceTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>ФИО</th>
            {daysToDisplay.map((day) => (
              <th key={day}>{day}</th>
            ))}
            {isAdmin && <th>Действия</th>}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={entry._id}>
              <td>{index + 1}</td>
              <td>{isAdmin ? <input value={entry.studentName} onChange={(e) => handleChange(index, 'studentName', e.target.value)} /> : entry.studentName}</td>
              {daysToDisplay.map((day) => (
                <td key={day}>
                  {isAdmin ? (
                    <input
                      type="checkbox"
                      checked={entry.attendance[day] || false}
                      onChange={(e) => handleChange(index, `attendance.${day}`, e.target.checked)}
                    />
                  ) : (
                    entry.attendance[day] ? '✔' : ''
                  )}
                </td>
              ))}
              {isAdmin && (
                <td>
                  <button onClick={() => handleDeleteEntry(entry._id)}>Удалить</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <Header
        title='Журнал посещаемости студентов'
        showBlock={true}
        innerTitle="Журнал посещаемости"
        linkText="Журнал посещаемости"
        showGradient={true}
      />
      <main className="attendance-journal-content">
        <section className="attendance-journal-section">
          <h2>Журнал посещаемости</h2>
          <div>
            <label>Выберите группу: </label>
            <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
              <option value="group1">Группа 1</option>
              <option value="group2">Группа 2</option>
              <option value="group3">Группа 3</option>
            </select>
          </div>
          <div>
            <label>Выберите месяц: </label>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="1">Январь</option>
              <option value="2">Февраль</option>
              <option value="3">Март</option>
              <option value="4">Апрель</option>
              <option value="5">Май</option>
              <option value="6">Июнь</option>
              <option value="7">Июль</option>
              <option value="8">Август</option>
              <option value="9">Сентябрь</option>
              <option value="10">Октябрь</option>
              <option value="11">Ноябрь</option>
              <option value="12">Декабрь</option>
            </select>
          </div>
          {isAdmin && (
            <div>
              <h3>Управление столбцами</h3>
              <input
                type="number"
                placeholder="Добавить число"
                value={newDay}
                onChange={(e) => setNewDay(e.target.value)}
              />
              <button onClick={handleAddDay}>Добавить</button>
              <ul>
                {daysToDisplay.map((day) => (
                  <li key={day}>
                    {day} <button onClick={() => handleRemoveDay(day)}>Удалить</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {renderAttendanceTable()}
          {isAdmin && (
            <div className="attendance-journal-add-entry">
              <h3>Добавить запись</h3>
              <input
                type="text"
                placeholder="Имя студента"
                value={newEntry.studentName}
                onChange={(e) => setNewEntry({ ...newEntry, studentName: e.target.value })}
              />
              <select value={newEntry.group} onChange={(e) => setNewEntry({ ...newEntry, group: e.target.value })}>
                <option value="group1">Группа 1</option>
                <option value="group2">Группа 2</option>
                <option value="group3">Группа 3</option>
              </select>
              <select value={newEntry.month} onChange={(e) => setNewEntry({ ...newEntry, month: e.target.value })}>
                <option value="1">Январь</option>
                <option value="2">Февраль</option>
                <option value="3">Март</option>
                <option value="4">Апрель</option>
                <option value="5">Май</option>
                <option value="6">Июнь</option>
                <option value="7">Июль</option>
                <option value="8">Август</option>
                <option value="9">Сентябрь</option>
                <option value="10">Октябрь</option>
                <option value="11">Ноябрь</option>
                <option value="12">Декабрь</option>
              </select>
              <button onClick={handleAddEntry}>Добавить</button>
            </div>
          )}
          {isAdmin && (
            <div className="attendance-journal-save-all">
              <button onClick={handleSave}>Сохранить все изменения</button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AttendanceJournal;
