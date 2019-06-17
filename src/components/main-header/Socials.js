import React from 'react';
import { SocialContainer } from './HeaderContainerStyle';

const Socials = () => (
  // ============ SOCIALS ==============
  <SocialContainer>
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

export default Socials;
