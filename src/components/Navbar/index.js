import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { robotHead } from "./images";

import "./style.css";

const NavComponent = ({ currentPage, handlePageChange }) => { // this is doubling up on links, I have both a manual system and bootstrap links in place.
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="nav-card">
      <div className="nav-container">
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange('Home')}
          // className={currentPage === 'Home' ? 'header-title active' : 'header-title'}
          className="header-title"
        >
          <img 
            src={robotHead}
            alt="A robot's head."
          />{' '}
          <h2 className="title">
            <span className="title-first-line">Eric Kirberger </span>
            <br></br>
            <span className="title-second-line">Web Developer</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-list">
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
            <NavDropdown
              title="Fun Stuff"
              id="collasible-nav-dropdown"
              className="nav-list bg-dark"
            >
              <NavDropdown.Item>
                <Nav.Link
                  href="#lofi"
                  onClick={() => handlePageChange('LoFi')}
                  className={currentPage === 'LoFi' ? 'nav-link active' : 'nav-link'}
                >
                  Music Player
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                placeholder
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="nav-list">
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavComponent;