import React from 'react';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container mt-2 p-3 shadow rounded">
            <img src={brain} alt="brain" width="70px" />
        </div>
    );
}

export default Logo;