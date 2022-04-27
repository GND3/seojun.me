import React from 'react';
import './Footer.css';
import { GITHUB_LINK, PRIOR_TELEPHONE_NUMBER } from './Footer.helper';

export const Footer = (): JSX.Element => {
  return (
    <div className="footer_container">
      <div className="copyright_text">Copyrights © 2022 GND3 all rights reserved.</div>
      <div className="link_area">
        <span className="contact_title">Contact : </span>
        <a className="link_text" href={GITHUB_LINK}>
          Github
        </a>
        <span className="divider"> | </span>
        <a className="link_text" href={`tel:${PRIOR_TELEPHONE_NUMBER}`}>
          Phone
        </a>
      </div>
    </div>
  );
};

export default Footer;
