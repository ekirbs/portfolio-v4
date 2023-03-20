import React from 'react';
import { Navbar } from "react-bootstrap";

import { robotHead } from "./images";

import './style.css';

function Header() {
  return (
    <header className="header">
      <a href="https://ekirbs.github.io/portfolio-v4/"><h1>Eric Kirberger || Web Developer</h1></a>
    </header>
  );
}

export default Header;
