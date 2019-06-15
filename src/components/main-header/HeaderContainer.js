import React from 'react';
import './headerContainer.scss';

import logo from '../../assets/logo.png';
import Socials from './Socials';
import Title from './Title';

const HeaderContainer = () => (
  <div className="header-container">
    <p className="logo">
      <img src={logo} alt="JBM" />
    </p>
    <div className="container">
      {/* ========> Title */}
      <Title />

      {/* ==============> BLUECIRCLE */}
      <div className="blueCircle-0" bottom="700px" left="220px" opacity="0.7" />
      <div className="blueCircle-1" top="-970px" left="0" />
      <div
        className="blueCircle-2"
        top="-1040px"
        left="240px"
        width="9px"
        height="9px"
        opacity="0.1"
      />
      <div className="blueCircle-3" top="-970px" left="440px" width="9px" height="9px" />
      <div className="blueCircle-4" top="-1300px" left="436px" opacity="0.7" />
      <div className="blueCircle-5" bottom="330px" left="0" opacity="0.1" />
      <div className="blueCircle-6" bottom="610px" left="380px" opacity="1" />
      <div
        className="blueCircle-7"
        width="30px"
        height="30px"
        opacity="0.4"
        top="30px"
        left="20px"
      />
      <div
        className="blueCircle-8"
        width="9px"
        height="9px"
        opacity="0.6"
        bottom="542px"
        left="110px"
      />
      <div
        className="blueCircle-9"
        width="15px"
        height="15px"
        opacity="0.1"
        bottom="411px"
        left="333px"
      />

      {/* =========== > SOCIALS */}
      <Socials />
    </div>
  </div>
);

export default HeaderContainer;
