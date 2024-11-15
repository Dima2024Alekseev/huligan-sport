import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import "../style/attendance-journal.css"; // Импорт CSS стилей

const AttendanceJournal = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newEntry, setNewEntry] = useState({ studentName: '', group: '', month: new Date().getMonth() + 1, attendance: {}, days: [] });
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Текущий месяц по умолчанию
  const [daysToDisplay, setDaysToDisplay] = useState([]); // Начальные числа месяца
  const [newDay, setNewDay] = useState('');
  const [groups, setGroups] = useState([]); // Список групп
  const [newGroup, setNewGroup] = useState(''); // Новая группа
  const [editingGroup, setEditingGroup] = useState(null); // Группа, которую редактируем

  const fetchAttendanceData = useCallback(async () => {
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
  }, [selectedGroup, selectedMonth]);

  const fetchGroups = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/groups');
      setGroups(response.data);
      if (response.data.length > 0) {
        setSelectedGroup(response.data[0]);
        setNewEntry(prevEntry => ({ ...prevEntry, group: response.data[0] })); // Устанавливаем группу для новой записи
        console.log('Первая группа:', response.data[0]);
      }
    } catch (error) {
      console.error('Ошибка при получении групп:', error);
    }
  }, []);

  useEffect(() => {
    fetchGroups();

    const checkAdmin = () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(decodedToken.role === 'admin');
      }
    };

    checkAdmin();
  }, [fetchGroups]);

  useEffect(() => {
    if (selectedGroup) {
      fetchAttendanceData();
    }
  }, [selectedGroup, selectedMonth, fetchAttendanceData]);

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
      console.log('Новая запись:', newEntryWithMonth);
      const response = await axios.post('http://localhost:5000/api/attendance', newEntryWithMonth, {
        headers: {
          'Authorization': token
        }
      });
      console.log('Ответ сервера:', response.data);
      setNewEntry({ studentName: '', group: selectedGroup, month: new Date().getMonth() + 1, attendance: {}, days: [] });
      alert('Запись добавлена');
      // Обновление данных после добавления новой записи
      fetchAttendanceData();
    } catch (error) {
      console.error('Ошибка при добавлении записи:', error);
      alert('Ошибка при добавлении записи: ' + error.message);
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
    const day = parseInt(newDay, 10);
    if (day && day >= 1 && day <= 31 && !daysToDisplay.includes(day)) {
      setDaysToDisplay([...daysToDisplay, day].sort((a, b) => a - b));
      setNewDay('');
      console.log('Добавлен новый день:', day);
    } else {
      alert('Пожалуйста, введите число от 1 до 31.');
    }
  };

  const handleRemoveDay = (day) => {
    setDaysToDisplay(daysToDisplay.filter(d => d !== day).sort((a, b) => a - b));
    console.log('Удален день:', day);
  };

  const handleAddGroup = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/groups', { name: newGroup }, {
        headers: {
          'Authorization': token
        }
      });
      setNewGroup('');
      fetchGroups();
      alert('Группа добавлена');
    } catch (error) {
      console.error('Ошибка при добавлении группы:', error);
    }
  };

  const handleDeleteGroup = async (group) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/groups/${group}`, {
        headers: {
          'Authorization': token
        }
      });
      fetchGroups();
      alert('Группа удалена');
    } catch (error) {
      console.error('Ошибка при удалении группы:', error);
    }
  };

  const handleEditGroup = (group) => {
    setEditingGroup(group);
    setNewGroup(group);
  };

  const handleUpdateGroup = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/groups/${editingGroup}`, { newName: newGroup }, {
        headers: {
          'Authorization': token
        }
      });
      setEditingGroup(null);
      setNewGroup('');
      fetchGroups(); // Обновление списка групп после обновления группы
      alert('Группа обновлена');
    } catch (error) {
      console.error('Ошибка при обновлении группы:', error);
    }
  };

  const handleCopyAttendance = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/attendance/copy', { group: selectedGroup, month: selectedMonth }, {
        headers: {
          'Authorization': token
        }
      });
      alert('Данные посещаемости скопированы на следующий месяц');
    } catch (error) {
      console.error('Ошибка при копировании данных посещаемости:', error);
    }
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
              <td className='element-center'>{index + 1}</td>
              <td>{isAdmin ? <input value={entry.studentName} onChange={(e) => handleChange(index, 'studentName', e.target.value)} /> : entry.studentName}</td>
              {daysToDisplay.map((day) => (
                <td key={day} className='element-center'>
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
                <td className='element-center'>
                  <button onClick={() => handleDeleteEntry(entry._id)}>Удалить</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getMonthName = (month) => {
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    return months[month - 1];
  };

  const getMonthNameGenitive = (month) => {
    const monthsGenitive = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return monthsGenitive[month - 1];
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <>
      <Header
        title='Журнал посещаемости студентов'
        showBlock={true}
        innerTitle="Журнал посещаемости"
        linkText="Журнал посещаемости"
        showGradient={true}
        onLogout={handleLogout}
      />
      <main className="attendance-journal-content">
        <section className="attendance-journal-section">
          <h1>Журнал посещаемости</h1>
          <div className='group-and-month'>
            <div className='group'>
              <label>Выберите группу: </label>
              <select value={selectedGroup} onChange={(e) => {
                const selectedGroup = e.target.value;
                setSelectedGroup(selectedGroup);
                setNewEntry(prevEntry => ({ ...prevEntry, group: selectedGroup })); // Устанавливаем группу для новой записи
                console.log('Выбрана группа:', selectedGroup);
              }}>
                {groups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>
            <div className='month'>
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
          </div>
          <h1 className="current-month">{getMonthName(selectedMonth)}</h1>
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
              <div className='create-student-group-month'>
                <div>
                  <select value={newEntry.group} onChange={(e) => setNewEntry({ ...newEntry, group: e.target.value })}>
                    {groups.map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                <div>
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
                </div>
              </div>
              <div>
                <button className='create' onClick={handleAddEntry}>Добавить</button>
                <h3>Добавить дни</h3>
                <input
                  type="number"
                  placeholder="Добавить число"
                  value={newDay}
                  onChange={(e) => setNewDay(e.target.value)}
                  min="1"
                  max="31"
                />
                <button className='create-days' onClick={handleAddDay}>Добавить</button>
                <ul className="days-list">
                  {daysToDisplay.map((day) => (
                    <li key={day}>
                      {day} {getMonthNameGenitive(selectedMonth)} <button onClick={() => handleRemoveDay(day)}>Удалить</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {isAdmin && (
            <div className="attendance-journal-add-group">
              <h3>Добавить группу</h3>
              <input
                type="text"
                placeholder="Название группы"
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
              />
              <button className='create-group create' onClick={editingGroup ? handleUpdateGroup : handleAddGroup}>
                {editingGroup ? 'Обновить' : 'Добавить'}
              </button>
              <ul className="groups-list">
                {groups.map((group) => (
                  <li key={group}>
                    {group}
                    <button onClick={() => handleEditGroup(group)}>Редактировать</button>
                    <button onClick={() => handleDeleteGroup(group)}>Удалить</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isAdmin && (
            <div className="attendance-journal-save-all">
              <button onClick={handleSave}>Сохранить все изменения</button>
              <button onClick={handleCopyAttendance}>Копировать данные на следующий месяц</button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AttendanceJournal;
