import React, {Component} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        message: ''
    }

    formSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        axios.post('/register', data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                this.setState({
                    loggedIn: true
                })
                this.props.setUser(response.data.user)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        // After Register Redirect to Profile
        if (this.state.loggedIn) {
            return <Navigate to={'/profile'}/>
        }

        return (
            <div>
                <div>
                    <div className="row">
                        <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                            <h3 className="text-center">Register Account</h3>
                            <form onSubmit={this.formSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        required
                                        onChange={(event) => {
                                            this.setState({name: event.target.value})
                                        }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        type="email"
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
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        required
                                        onChange={(event) => {
                                            this.setState({password: event.target.value})
                                        }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Confirm Password</label>
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        className="form-control"
                                        required
                                        onChange={(event) => {
                                            this.setState({password_confirmation: event.target.value})
                                        }}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary col-12 mt-4 mb-4">Register</button>
                                Have an Account? <Link to="/login">Login here</Link>
                                <br></br>
                                Forget Password <Link to="/forget">Click here</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;