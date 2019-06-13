import React from 'react';

import { TitleStyle } from '../../style/HeaderContainerStyle';

const Title = () => (
  <>
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

      <div className="about-wrapper">
        <h2>
          About_
          <br />
          me
          <span className="colon">:</span>
        </h2>
        <p className="about small-height">
          Hello. I am John a Web developer who strives to learn, and take on challenges daily.
          Experienced in mentoring other developers, and teaching programming Consistently improves
          upon projects and designs, seeking to inspire people with easy to navigate web design
        </p>
      </div>
    </TitleStyle>
  </>
);

export default Title;
