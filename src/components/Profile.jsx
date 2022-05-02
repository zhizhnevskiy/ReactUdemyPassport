import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="mt-5 p-5 bg-light text-black col-lg-4 offset-lg-4">
                            <h3 className="text-center">User Profile</h3>
                            <ul className="list-group">
                                <li className="list-group-item">Name : name</li>
                                <li className="list-group-item">Email : email</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;