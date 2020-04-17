import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signInEmail: '',
             signInPassword: ''
        }
    }
    

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-5">
                    <div className="mt-5 p-5 shadow rounded text-center">
                        <h1 className="text-light">Sign In</h1>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email:" onChange={this.onEmailChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password:" onChange={this.onPasswordChange} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.onSubmitSignin}>Sign in</button>
                        <p className="mt-2 text-dark pointer" onClick={() => onRouteChange('register')}>Register</p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}

export default Signin;