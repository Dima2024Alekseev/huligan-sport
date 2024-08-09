import React from "react";
import "./style/events.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Account = () => {
    
    return (
        <>
            <Header
            title='Аккаунт'
            showForm={true}
            showGradient={true}
            formFields={{ name: true, lastname: true, birthdate: true, email: true, password: true, confirmPassword: true }}
             />
            <Footer />
        </>
    );
};

export default Account;