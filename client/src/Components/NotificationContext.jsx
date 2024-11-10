// context/NotificationContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      toast[notification.type](notification.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setNotification(null); // Сброс состояния после отображения уведомления
    }
  }, [notification]);

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};
