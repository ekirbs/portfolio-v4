import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { robotHead } from "./images";

import "./style.css";

const NavComponent = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-card">
      <Container>
        <Navbar.Brand
          href="#home"
          className="header-title"
        >
          <img 
            src={robotHead}
            alt="A robot's head."
            // className="d-inline-block align-top"
          />{' '}
          <h1>Eric Kirberger || Web Developer</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Nav.Link>
            <NavDropdown title="Fun Stuff" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">
                placeholder
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                placeholder
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                placeholder
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#lofi">
                Music Player
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;