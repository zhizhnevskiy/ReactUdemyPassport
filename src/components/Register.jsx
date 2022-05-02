import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                            <h3 className="text-center">Register Account</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control"/>
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