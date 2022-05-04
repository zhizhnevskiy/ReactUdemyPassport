import React, {Component} from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

class NavMenu extends Component {

    logout = () => {
        localStorage.clear();
        this.props.setUser(null);
    }

    render() {

        let buttons;
        let profile;
        if (localStorage.getItem('token')) {
            buttons = (
                <Nav>
                    <Link className="nav-link" to="/" onClick={this.logout}>Logout</Link>
                </Nav>
            )
            profile = (
                <Link className="nav-link" to="/profile">Profile</Link>
            )
        } else (
            buttons = (
                <Nav>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </Nav>
            )
        )

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link className="navbar-brand" to="/">React Project</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                {profile}
                            </Nav>
                            {buttons}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default NavMenu;