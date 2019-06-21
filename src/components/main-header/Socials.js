import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SocialContainer } from './HeaderContainerStyle';

const Socials = ({ className }) =>
  // ============ SOCIALS ==============
  (
    <SocialContainer className={className}>
      <ul>
        <li>
          <a alt=".." href="/#" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a alt=".." href="/#" target="_blank">
            Linkedin
          </a>
        </li>
        <li>
          <a alt=".." href="/#" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a alt=".." href="/#">
            Behance
          </a>
        </li>
        <li>
          <a alt=".." href="/#">
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
