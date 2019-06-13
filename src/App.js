import React from 'react';
import styled from 'styled-components';

import Title from './components/title/Title';
import Socials from './components/wrap-social/Socials';

export const BlueCircle = styled.p`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  border: 18px solid #0097a7;
  border-radius: 40%;
  opacity: ${props => props.opacity || 1};
  position: relative;
  left: ${props => props.left || 1};
  right: ${props => props.right || 1};
  top: ${props => props.top || 1};
  bottom: ${props => props.bottom || 1};
  z-index: -4;
`;

const AppStyle = styled.div`
  max-width: 97%;
  margin: 0 auto;
  .test {
    margin-bottom: 5000px;
  }
  .container {
    border: 1px solid red;
    max-width: 87%;
    margin: 0 auto;
  }
  .logo {
    border: 1px solid blue;
    font-size: 40px;
    color: white;
  }
`;

const App = () => (
  <AppStyle>
    <p className="logo">Logo</p>

    <div className="container">
      <Title />
      <BlueCircle bottom="330px" left="0" />
      <BlueCircle bottom="610px" left="380px" opacity="0.4" />
      <BlueCircle width="30px" height="30px" opacity="0.4" top="30px" left="20px" />
      <BlueCircle width="9px" height="9px" opacity="0.6" bottom="542px" left="110px" />
      <BlueCircle width="15px" height="15px" opacity="0.9" bottom="411px" left="333px" />

      <Socials />
    </div>
    <div className="test">tseting</div>
  </AppStyle>
);

export default App;
