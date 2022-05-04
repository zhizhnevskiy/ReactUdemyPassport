import React, {Component} from 'react';
import NavMenu from "./NavMenu";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Reset from "../components/Reset";
import Profile from "../components/Profile";
import axios from "axios";

class Header extends Component {
    state = {
        loggedUser: {}
    }

    componentDidMount() {
        // Login User Credentials
        axios.get('/user')
            .then((response) => {
                this.setUser(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    setUser = (user) => {
        this.setState({loggedUser: user})
    }

    render() {
        return (
            <Router>
                <div>
                    <NavMenu
                        user={this.state.loggedUser}
                        setUser={this.setUser}
                    />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/profile"
                               element={<Profile
                                   user={this.state.loggedUser}
                               />}
                        />
                        <Route exact path="/login"
                               element={<Login
                                   user={this.state.loggedUser}
                                   setUser={this.setUser}
                               />}
                        />
                        <Route exact path="/register"
                               element={<Register
                                   user={this.state.loggedUser}
                                   setUser={this.setUser}
                               />}
                        />
                        <Route exact path="/forget" element={<Forget/>}/>
                        <Route exact path="/reset/:id" element={<Reset/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default Header;