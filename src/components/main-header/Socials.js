import React from 'react';
import { SocialStyle } from '../../style/HeaderContainerStyle';

const Socials = () => (
  <SocialStyle>
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
    <div className="jb-miranda">
      <a href="/#">
        John Benedict Miranda
        <i className="fas fa-heart" />
      </a>
    </div>
  </SocialStyle>
);

export default Socials;
