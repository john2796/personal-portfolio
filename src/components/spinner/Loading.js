import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const LoadingStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <LoadingStyle>
    <img src={logo} alt="loading..." />
  </LoadingStyle>
);

export default Loading;
