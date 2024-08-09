import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/profile.css'; // Убедитесь, что ваш CSS файл подключен

const Form = ({ showFields, formTitle  }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: '',
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
          <div className="flex">
            <label>
              <input id="name" type="text" placeholder="" required value={formData.name} onChange={handleChange} />
              <span>Имя</span>
            </label>

            <label>
              <input id="lastname" type="text" placeholder="" required value={formData.lastname} onChange={handleChange} />
              <span>Фамилия</span>
            </label>
          </div>
        )}
        {showFields.birthdate && (
          <label id="indentation">
            <input id="birthdate" type="date" placeholder="" required value={formData.birthdate} onChange={handleChange} />
            <span>Дата рождения</span>
          </label>
        )}
        <label id="indentation">
          <input id="email" type="email" placeholder="" required value={formData.email} onChange={handleChange} />
          <span>Email</span>
        </label>
        <label id="indentation">
          <input id="password" type="password" placeholder="" required value={formData.password} onChange={handleChange} />
          <span>Пароль</span>
        </label>
        <label id="indentation">
          <input id="confirmPassword" type="password" placeholder="" required value={formData.confirmPassword} onChange={handleChange} />
          <span>Потвердите пароль</span>
        </label>
        <button type="submit" className="submit">Зарегистрироваться</button>
        <p className="signin">Уже есть аккаунт?<Link to='/authorization-account'> Войти</Link> </p>
      </form>
    </div>
  );
};

export default Form;
