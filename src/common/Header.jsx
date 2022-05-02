import React, {Component} from 'react';
import NavMenu from "./NavMenu";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profile from "../components/Profile";

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavMenu/>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route exact path="/" element={ <Home /> }/>
                        <Route exact path="/login" element={ <Login /> }/>
                        <Route exact path="/register" element={ <Register /> }/>
                        <Route exact path="/forget" element={ <Forget /> }/>
                        <Route exact path="/profile" element={ <Profile /> }/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default Header;