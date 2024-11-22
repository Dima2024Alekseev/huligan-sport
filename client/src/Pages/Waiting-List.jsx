import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer/Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/profile.css";

const Waiting = () => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (formData) => {
    if (!recaptchaLoaded) {
      toast.error('reCAPTCHA еще не загружена. Пожалуйста, подождите.');
      return;
    }

    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      toast.error('Пожалуйста, подтвердите, что вы не робот.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/applications/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaResponse }),
      });
      if (response.ok) {
        toast.success('Заявка успешно отправлена');
      } else {
        const errorMessage = await response.text();
        toast.error(`Ошибка при отправке заявки: ${errorMessage}`);
        console.error('Ошибка при отправке заявки:', errorMessage);
      }
    } catch (error) {
      toast.error('Ошибка при отправке заявки');
      console.error('Ошибка при отправке заявки:', error);
    }
  };

  return (
    <div id="inner">
      <ToastContainer />
      <Header title='Лист ожидания' />
      <main>
        <Form
          showFields={{ name: true, lastname: true, phone: true, age: true, direction: true }}
          formTitle='Форма заполнения заявки'
          title_button='Отправить заявку'
          onSubmit={handleSubmit}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Waiting;
