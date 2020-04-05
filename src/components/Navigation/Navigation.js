import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        isSignedIn ? (
            <nav className="pt-2 d-flex justify-content-end">
                <p className="signup text-light" onClick={() => onRouteChange('signin')}>Sign Out</p>
            </nav>
        )
        : (
            <nav className="pt-2 d-flex justify-content-end">
                <p className="signup text-light mr-4" onClick={() => onRouteChange('signin')}>Sign In</p>
                <p className="signup text-light" onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        )
    );
}

export default Navigation;