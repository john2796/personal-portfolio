import React from 'react';
import { TitleContainer } from './HeaderContainerStyle';

const Title = () => (
  <TitleContainer>
    {/* =======> big text in the background */}
    <div className="text-top">
      <h3>
        des_
        <br />
        ign
      </h3>
    </div>
    <div className="name-wrapper">
      <h1>
        Hello
        <span className="circle">.</span>
        <br />
        I am
        <br />
        Benedict
      </h1>

      <p className="fs-web">
        Full-Stack Web Developer
        <br />
        based in San Deigo
      </p>
    </div>
  </TitleContainer>
);

export default Title;
