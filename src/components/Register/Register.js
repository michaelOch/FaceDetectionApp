import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    
    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user) {
                this.props.onRouteChange('signin');
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-5">
                    <div className="mt-5 p-5 shadow rounded text-center">
                        <h1 className="text-light">Register</h1>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username:" onChange={this.onNameChange} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email:" onChange={this.onEmailChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password:" onChange={this.onPasswordChange} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.onSubmitRegister}>Register</button>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}

export default Register;