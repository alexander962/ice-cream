import React from 'react';
import { Container } from '@material-ui/core';

import logo from '../../img/logoM.png';
import logoText from '../../img/logo-text.png';
import './Footer.sass';

const Footer = () => {
  return (
    <div className="Footer">
      <Container fixed className="container">
        <div className="footer-main">
          <div className="footer-main_img">
            <img src={logo} alt="logo" />
            <img src={logoText} alt="logo text" className="Header-logo_text" />
          </div>

          <ul className="footer-main_nav">
            <li>
              <a href="!#">Our Products</a>
            </li>
            <li>
              <a href="!#">Privacy Terms</a>
            </li>
            <li>
              <a href="!#">Twitter</a>
            </li>
            <li>
              <a href="!#">Facebook</a>
            </li>
            <li>
              <a href="!#">Email</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="footer-info">
        <Container>
          © {new Date().getFullYear()} Justice-team. All rights reserved.
        </Container>
      </div>
    </div>
  );
};

export default Footer;
