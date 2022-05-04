import React, {Component} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

class Profile extends Component {

    render() {

        let name;
        let email;
        if(this.props.user){
            name = this.props.user.name;
            email = this.props.user.email;
        }

        // check login
        if(!localStorage.getItem('token')){
            return <Navigate to={'/login'}/>
        }

        return (
            <div>
                <div>
                    <div className="row">
                        <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                            <h3 className="text-center">User Profile</h3>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : { name }
                                </li>
                                <li className="list-group-item">
                                    Email : {email}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;