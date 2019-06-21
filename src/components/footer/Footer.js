import React from 'react';
import { FooterStyle } from './FooterStyle';
import Socials from '../main-header/Socials';

// Things todo :
const Footer = () => (
  <FooterStyle className="container">
    <div className="big-text">
      <h3>
        Hire_
        <br />
        me
      </h3>
    </div>
    <h2>
      I'm always interested about cool stuff. Are you minding a project?
      <br />
      <span className="color">
        <a
          href="mailto:jbmiranda22796@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="color footer-a"
        >
          Let's talk.
        </a>
      </span>
    </h2>

    {/* -----> SOCIALS */}
    <Socials className="footer-nav" />
  </FooterStyle>
);
export default Footer;
