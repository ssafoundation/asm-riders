import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import './Navbar.css'
const Home = () => {
    return (
        <div className="header-wrap container">
            {/* <Navbar bg="light" expand="lg">
                <Navbar> <Link to='/'><h2>ASM-RIDESRS</h2></Link></Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/destination">destination</Nav.Link>
                        <Nav.Link to="/blog">Blog</Nav.Link>
                        <Nav.Link to="/contact">Contact</Nav.Link>
                        <Nav.Link to="/login">Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            <div className="header-logo">
                <Link to='/'><h2>ASM-RIDESRS</h2></Link>

            </div>
            <div className="header-navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="login-page">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;