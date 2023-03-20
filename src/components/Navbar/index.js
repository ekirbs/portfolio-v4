import React from 'react';

import "./style.css";

const NavComp = ({ currentPage, handlePageChange }) => {

  return (
      <div className="navCard">
        <ul className="nav">
          <li className="nav-item navHeader">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item navHeader">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
          <li className="nav-item navHeader">
            <a
              href="#lofi"
              onClick={() => handlePageChange('LoFi')}
              className={currentPage === 'LoFi' ? 'nav-link active' : 'nav-link'}
            >
              LoFi
            </a>
          </li>
          <li className="nav-item navHeader">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
  )
}

export default NavComp;
