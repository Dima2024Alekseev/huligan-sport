import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../style/profile.css";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer/Footer";

const Authorization = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', formData);
      const { token } = response.data;
      localStorage.setItem('token', token); // Сохранение токена в localStorage
      navigate('/home'); // Перенаправление на главную страницу
    } catch (error) {
      setError(error.response?.data?.error || 'Произошла ошибка при авторизации');
    }
  };

  return (
    <div id="inner">
      <Header title='Авторизация аккаунта' />
      <main>
        <Form
          showFields={{ login: true, password: true }}
          formTitle='Авторизация'
          title_button='Войти'
          onSubmit={handleSubmit}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Authorization;
