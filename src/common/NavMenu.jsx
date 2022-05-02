import React, {Component} from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

class NavMenu extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link className="navbar-brand" to="/">React Project</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </Nav>
                            <Nav>
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
            </div>
        );
    }
}

export default NavMenu;