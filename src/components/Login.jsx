import React, {Component} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    formSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/login', data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                this.setState({
                    loggedIn: true
                })
                this.props.setUser(response.data.user)
            })
            .catch((error) => {
                this.setState({error: error.response.data.message})
            });
    }

    render() {

        // Show messages
        let error = '';
        if (this.state.error) {
            error = (
                <div>
                    <div className='alert alert-danger' role='alert'>
                        {this.state.error}
                    </div>
                </div>
            )
        }

        // After Login Redirect to Profile
        if (this.state.loggedIn) {
            return <Navigate to={'/profile'}/>
        }

        return (
            <div>
                <div className="row">
                    <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                        <h3 className="text-center">Login Account</h3>
                        <form onSubmit={this.formSubmit}>
                            {error}
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                       name="email"
                                       className="form-control"
                                       required
                                       onChange={(event) => {
                                           this.setState({email: event.target.value})
                                       }}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"
                                       name="password"
                                       className="form-control"
                                       required
                                       onChange={(event) => {
                                           this.setState({password: event.target.value})
                                       }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary col-12 mt-4 mb-4">Login</button>
                            Forget Password <Link to="/forget">Click here</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;