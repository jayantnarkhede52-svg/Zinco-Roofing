import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './BackButton.module.css';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Don't show on home page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <button 
            className={styles.backButton} 
            onClick={() => navigate(-1)}
            aria-label="Go back"
        >
            <FaArrowLeft className={styles.icon} />
            <span>Back</span>
        </button>
    );
};

export default BackButton;
