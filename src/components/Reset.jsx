import React, {Component} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

class Reset extends Component {
    state = {
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
        message: '',
        error: []
    }

    formSubmit = (event) => {
        event.preventDefault();
        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        axios.post('/resetPassword', data)
            .then((response) => {
                this.setState({message: response.data.message})
                this.setState({error: []})
                document.getElementById('forgetPassword').reset()
            })
            .catch((error) => {
                if(typeof error.response.data.message == "object") {
                    const errors = new Set()
                    Object.values(error.response.data.message).forEach(function (el) {
                        errors.add(el)
                    })
                    this.setState({error: errors})
                } else {
                    this.setState({error: error.response.data.message})
                }
                this.setState({message: ''})
            });
    }

    render() {
        // Show messages
        let messages = '';
        let error = '';
        if (this.state.message) {
            messages = (
                <div>
                    <div className='alert alert-success' role='alert'>
                        {this.state.message}
                    </div>
                </div>
            )
            error = ''
        }
        if (this.state.error.length !== 0) {
            error = (
                <div>
                    <div className='alert alert-danger' role='alert'>
                        {this.state.error}
                    </div>
                </div>
            )
        }

        // check login
        if(localStorage.getItem('token')){
            return <Navigate to={'/'}/>
        }

        return (
            <div>
                <div>
                    <div>
                        <div className="row">
                            <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                                <h3 className="text-center">Reset Password</h3>
                                <form onSubmit={this.formSubmit} id='forgetPassword'>
                                    {messages}
                                    {error}
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Pin code</label>
                                        <input
                                            type="text"
                                            name="token"
                                            className="form-control"
                                            required
                                            onChange={(event) => {
                                                this.setState({token: event.target.value})
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
                                        <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
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

                                    <button type="submit" className="btn btn-primary col-12 mt-4 mb-4">Reset Password</button>
                                    Have an Account? <Link to="/login">Login here</Link>
                                    <br></br>
                                    Forget Password <Link to="/forget">Click here</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reset;