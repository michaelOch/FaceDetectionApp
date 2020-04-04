import React from 'react';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container mt-3 p-3 shadow rounded">
            <img src={brain} alt="brain" />
        </div>
    );
}

export default Logo;