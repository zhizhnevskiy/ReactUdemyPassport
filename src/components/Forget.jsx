import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Forget extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                        <h3 className="text-center">Forget Password</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control"/>
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