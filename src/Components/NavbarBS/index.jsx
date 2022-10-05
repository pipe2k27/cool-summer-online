import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';


function NavbarBS() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='navbarBS'>
            <Container>
                <Navbar.Brand className='logoContainer'>
                    <img src="images/logo-blue.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={'div'}>
                            <Link to="/" className="nav-element">
                                <p>Home</p>
                                <span className="nav-span"></span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link as={'div'}>
                            <Link to="/construccion" className="nav-element">
                                <p>Construcción</p>
                                <span className="nav-span"></span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link as={'div'}>
                            <Link to="/revestimientos" className="nav-element">
                                <p>Revestimientos</p>
                                <span className="nav-span"></span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link as={'div'}>
                            <Link to="/contacto" className="nav-element">
                                <p>Contacto</p>
                                <span className="nav-span"></span>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBS;