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
    <div className="container ">
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
