import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  margin-top: 100px;
  .small-height {
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    color: rgba(255, 255, 255, 0.8);
    @media (max-width: 991px) {
      line-height: 28px;
    }
  }
  .circle {
    color: #ff5252;
  }
`;

const Title = () => (
  <TitleStyle>
    <h1>
      Hello
      <span className="circle">.</span>
      <br />
      I am
      <br />
      Benedict
    </h1>
    <div className="wrap-description">
      <p className="small-height">
        Full-Stack Web Developer
        <br />
        based in San Deigo
      </p>
    </div>
  </TitleStyle>
);

export default Title;
