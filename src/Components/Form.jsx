import React, { useState } from 'react';


const Form = ({ showFields, formTitle, title_button }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: '',
    direction: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log(formData);
  };

  return (
    <div className="content-registration">
      <form onSubmit={handleSubmit}>
        <p className="form-title">{formTitle}</p>
        {showFields.name && (
          <label>
            <input id="name" type="text" placeholder="" required value={formData.name} onChange={handleChange} />
            <span>Имя</span>
          </label>
        )}
        {showFields.lastname && (
          <label>
            <input id="lastname" type="text" placeholder="" required value={formData.lastname} onChange={handleChange} />
            <span>Фамилия</span>
          </label>
        )}
        {showFields.email && (
          <label id="indentation">
            <input id="email" type="email" placeholder="" required value={formData.email} onChange={handleChange} />
            <span>Email</span>
          </label>
        )}
        {showFields.password && (
          <label id="indentation">
            <input id="password" type="password" placeholder="" required value={formData.password} onChange={handleChange} />
            <span>Пароль</span>
          </label>
        )}
        {showFields.confirmPassword && (
          <label id="indentation">
            <input id="confirmPassword" type="password" placeholder="" required value={formData.confirmPassword} onChange={handleChange} />
            <span>Потвердите пароль</span>
          </label>
        )}
        {showFields.phone && (
          <label id="indentation">
            <input id="phone" type="tel" placeholder="" required value={formData.phone} onChange={handleChange} />
            <span>Телефон</span>
          </label>
        )}
        {showFields.age && (
          <label id="indentation">
            <input id="age" type="text" placeholder="" required value={formData.age} onChange={handleChange} />
            <span>Возраст</span>
          </label>
        )}
        {showFields.direction && (
          <label id="indentation">
            <select id="direction" required value={formData.direction} onChange={handleChange}>
              <option value="" disabled>Выберите направление</option>
              <option value="Мма">Мма</option>
              <option value="Грэпплинг">Грэпплинг</option>
              <option value="Бокс">Бокс</option>
              <option value="Кикбоксинг">Кикбоксинг</option>
              <option value="Рукопашный бой">Рукопашный бой</option>
              <option value="Каратэ">Каратэ</option>
              <option value="Женская самооборона">Женская самооборона</option>
            </select>
          </label>
        )}
        <button type="submit" className="submit">{title_button}</button>
      </form>
    </div>
  );
};

export default Form;
