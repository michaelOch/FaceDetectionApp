import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-5">
                <div className="mt-5 p-5 shadow rounded text-center">
                    <h1 className="text-light">Register</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username:" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email:" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password:" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => onRouteChange('home')}>Register</button>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
}

export default Register;