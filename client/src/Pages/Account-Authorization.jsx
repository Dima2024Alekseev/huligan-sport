import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../Components/NotificationContext';
import { Helmet } from "react-helmet";
import "../styles/profile.css";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer/Footer";

const Authorization = () => {
  const [error, setError] = useState(null);
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('isAuthenticated', 'true');
      showNotification('Успешный вход!', 'success');
      navigate('/admin-dashboard');
    } catch (error) {
      setError(error.response?.data?.error || '');
      showNotification('Неверный логин или пароль', 'error');
    }
  };

  return (
    <div id="inner" className="authorization-page">
      <Helmet>
        <title>Авторизация - Академия боевых единоборств "Хулиган"</title>
        <meta name="description" content="Авторизуйтесь для доступа к административной панели Академии боевых единоборств 'Хулиган'." />
        <meta name="keywords" content="Авторизация, Академия боевых единоборств, Хулиган, административная панель, вход" />
      </Helmet>
      <Header />
      <main className="form-authorization">
        <Form
          showFields={{ login: true, password: true }}
          formTitle='Авторизация'
          title_button='Войти'
          onSubmit={handleSubmit}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Authorization;