import React from 'react';
import logo from '../../assets/logo.png';
import { HeaderContainerStyle } from './HeaderContainerStyle';

import Socials from './Socials';
import Title from './Title';
import BlueCircles from './BlueCircles';

const HeaderContainer = () => (
  <HeaderContainerStyle>
    <p className="logo">
      <img src={logo} alt="JBM" />
    </p>
    <div className="container">
      {/* =======> big text in the background */}
      <div className="text-top">
        <h3>
          des_
          <br />
          ign
        </h3>
      </div>
      {/* ========> Title */}
      <Title />
      {/* ==============> BLUECIRCLE */}
      <BlueCircles />
      {/* =========== > SOCIALS */}
      <Socials />
    </div>
  </HeaderContainerStyle>
);

export default HeaderContainer;
