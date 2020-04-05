import React from 'react';

const Signin = ({ onRouteChange }) => {
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-5">
                <div className="mt-5 p-5 shadow rounded text-center">
                    <h1 className="text-light">Sign In</h1>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email:" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password:" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => onRouteChange('home')}>Sign in</button>
                    <p className="mt-2 text-dark pointer" onClick={() => onRouteChange('register')}>Register</p>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
}

export default Signin;