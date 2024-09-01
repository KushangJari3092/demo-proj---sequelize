// components/Modal.js
import React, { useContext } from 'react';
import '../styles/errorModal.css';
import { Context } from '../context/context';


const ErrorModal = () => {

    const { BackendError, isModalOpen, setIsModalOpen } = useContext(Context)
    if (!isModalOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={() => { setIsModalOpen(false) }}>×</button>
                <h2>Oops..! ☹️</h2>
                <p>{BackendError}</p>
            </div>
        </div>
    );
};

export default ErrorModal;
