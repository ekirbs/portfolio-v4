import React from 'react';
import { instagramLogo, githubLogo, linkedinLogo } from './images';

import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="#" target="_blank" rel="noreferrer"><img src={instagramLogo} className="footerZoom rounded-image" alt="Instagram logo."/>Instagram</a>
      <a href="https://github.com/ekirbs" target="_blank" rel="noreferrer"><img src={githubLogo} className="footerZoom rounded-image" alt="GitHub logo."/>GitHub</a>
      <a href="https://www.linkedin.com/in/eric-kirberger/" target="_blank" rel="noreferrer"><img src={linkedinLogo} className="footerZoom rounded-image" alt="Linkedin logo."/>LinkedIn</a>
    </footer>
  );
}

export default Footer;
