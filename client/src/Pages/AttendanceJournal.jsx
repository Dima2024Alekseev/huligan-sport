// Pages/AttendanceJournal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import "../style/attendance-journal.css"; // Импорт CSS стилей

const AttendanceJournal = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newEntry, setNewEntry] = useState({ date: '', studentName: '', attendance: false });

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/attendance');
        setAttendanceData(response.data);
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
  }, []);

  const handleChange = (index, field, value) => {
    const newAttendanceData = [...attendanceData];
    newAttendanceData[index][field] = value;
    setAttendanceData(newAttendanceData);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/attendance', { attendance: attendanceData }, {
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
      await axios.post('http://localhost:5000/api/attendance', newEntry, {
        headers: {
          'Authorization': token
        }
      });
      setAttendanceData([...attendanceData, newEntry]);
      setNewEntry({ date: '', studentName: '', attendance: false });
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
          <table>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Имя студента</th>
                <th>Присутствие</th>
                {isAdmin && <th>Действия</th>}
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={entry._id}>
                  <td>{isAdmin ? <input value={entry.date} onChange={(e) => handleChange(index, 'date', e.target.value)} /> : entry.date}</td>
                  <td>{isAdmin ? <input value={entry.studentName} onChange={(e) => handleChange(index, 'studentName', e.target.value)} /> : entry.studentName}</td>
                  <td>{isAdmin ? <input type="checkbox" checked={entry.attendance} onChange={(e) => handleChange(index, 'attendance', e.target.checked)} /> : entry.attendance ? 'Присутствовал' : 'Отсутствовал'}</td>
                  {isAdmin && (
                    <td>
                      <button onClick={() => handleDeleteEntry(entry._id)}>Удалить</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {isAdmin && (
            <div className="attendance-journal-add-entry">
              <h3>Добавить запись</h3>
              <input
                type="text"
                placeholder="Дата"
                value={newEntry.date}
                onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Имя студента"
                value={newEntry.studentName}
                onChange={(e) => setNewEntry({ ...newEntry, studentName: e.target.value })}
              />
              <input
                type="checkbox"
                checked={newEntry.attendance}
                onChange={(e) => setNewEntry({ ...newEntry, attendance: e.target.checked })}
              />
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
