import React from 'react';
import styled from 'styled-components';

const WrapSocial = styled.div`
  position: fixed;
  right: -210px;
  top: 235px;
  z-index: 99;
  ul {
    transform: rotate(-90deg);
    list-style: none;
    display: flex;
    li {
      a {
        color: white;
        font-family: 'Inconsolata', monospace;
        text-transform: uppercase;
        font-size: 18px;
        line-height: 28px;
        margin-right: 36px;
        text-decoration: none;
      }
    }
  }
  .jb-miranda {
    position: fixed;
    z-index: 99;

    @media (max-width: 991px) {
      left: inherit;
      right: -75px;
      top: calc(100vh - 135px);
    }
    a {
      transform: rotate(-90deg);
      color: white;
      font-family: 'Inconsolata', monospace;
      font-size: 18px;
      line-height: 28px;
      background: #1f1f1f;
      text-decoration: none;
      position: relative;
      text-decoration: line-through;
      display: inline-block;
      &:hover {
        text-decoration: none;
      }
      i {
        margin-left: 8px;
        font-size: 15px;
      }
    }
  }
`;

const Socials = () => (
  <WrapSocial>
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
  </WrapSocial>
);

export default Socials;
