import React from 'react';
import PropTypes from 'prop-types';

import { SocialContainer } from './HeaderContainerStyle';

// ============ SOCIALS ==============
const Socials = ({ className }) => (
  <SocialContainer className={className}>
    <ul>
      <li>
        <a
          alt="facebook"
          href="https://www.facebook.com/john.miranda.1401"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          alt="Linkedin"
          href="https://www.linkedin.com/in/johnbenedictmiranda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          alt="Github"
          href="https://github.com/john2796"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
      <li>
        <a alt=".." href="/#" target="_blank" rel="noopener noreferrer">
          ChangeMe
        </a>
      </li>
      <li>
        <a
          alt="mail"
          href="mailto:jbmiranda22796@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mail
        </a>
      </li>
    </ul>

    {/* ============ JBMIRANDA SIDEBAR ============== */}
    <div className="jb-miranda">
      <a href="/#">
        John Benedict Miranda
        <i className="fa fa-heart" aria-hidden="true" />
      </a>
    </div>
  </SocialContainer>
);
Socials.propTypes = {
  className: PropTypes.string,
};

export default Socials;
