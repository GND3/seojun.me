import React from 'react';
import './Footer.css';

export const Footer = (): JSX.Element => {
  return (
    <div className="footer_container">
      <div className="copyright_text">Copyrights © 2022 GND3 all rights reserved.</div>
      <div className="link_area">
        <span className="contact_title">Contact : </span>
        <a className="link_text" href="https://github.com/gnd3">
          Github
        </a>
        <span className="divider"> | </span>
        <a className="link_text" href="tel:01082825555">
          Phone
        </a>
      </div>
    </div>
  );
};

export default Footer;
