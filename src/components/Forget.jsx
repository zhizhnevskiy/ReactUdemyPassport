import React, {Component} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

class Forget extends Component {
    state = {
        email: '',
        message: '',
        error: ''
    }

    formSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.email
        }
        axios.post('/forgotPassword', data)
            .then((response) => {
                this.setState({message: response.data.message})
                this.setState({error: ''})
                document.getElementById('forgetPassword').reset()
            })
            .catch((error) => {
                this.setState({error: error.response.data.message})
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
        if (this.state.error) {
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
                <div className="row">
                    <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                        <h3 className="text-center">Forget Password</h3>
                        <form onSubmit={this.formSubmit} id='forgetPassword'>
                            {messages}
                            {error}
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    required
                                    onChange={(event) => {
                                        this.setState({email: event.target.value})
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary col-12 mt-4 mb-4">Forget Password</button>
                            Have an Account? <Link to="/login">Login Here</Link>
                            <br></br>
                            Don't have Account? <Link to="/register">Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forget;