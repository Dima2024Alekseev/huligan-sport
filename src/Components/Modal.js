import React from "react";
import "../style/modal.css"; // Подключение файла стилей для модального окна

const Modal = ({ active, setActive, imageSrc }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={setActive}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={setActive}>&times;</span>
                {imageSrc && <img src={imageSrc} alt="Selected" className="modal_image" />}
            </div>
        </div>
    );
};

export default Modal;
