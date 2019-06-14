import React from 'react';
import { BlueCircle } from '../../style/AppStyle';
import { MainHeaderStyle } from '../../style/HeaderContainerStyle';

import logo from '../../assets/logo.png';
import Socials from './Socials';
import Title from './Title';

const HeaderContainer = () => (
  <MainHeaderStyle>
    <p className="logo">
      <img src={logo} alt="JBM" />
    </p>
    <div className="container">
    {/* ========> Title */}
      <Title />


      {/* ==============> BLUECIRCLE */}
      <BlueCircle bottom="700px" left="220px" opacity="0.7" />
      <BlueCircle top="-970px" left="0" />
      <BlueCircle top="-1040px" left="240px" width="9px" height="9px" opacity="0.1" />
      <BlueCircle top="-970px" left="440px" width="9px" height="9px" />

      <BlueCircle top="-1300px" left="436px" opacity="0.7" />
      <BlueCircle bottom="330px" left="0" opacity="0.1" />
      <BlueCircle bottom="610px" left="380px" opacity="1" />
      <BlueCircle width="30px" height="30px" opacity="0.4" top="30px" left="20px" />
      <BlueCircle width="9px" height="9px" opacity="0.6" bottom="542px" left="110px" />
      <BlueCircle width="15px" height="15px" opacity="0.1" bottom="411px" left="333px" />


      {/* =========== > SOCIALS */}
      <Socials />
    </div>
  </MainHeaderStyle>
);

export default HeaderContainer;
