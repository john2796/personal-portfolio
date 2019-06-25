import React from 'react';
import { AboutStyle } from './AboutStyle';
import BlueCircles from '../main-header/BlueCircles';

const About = () => (
  // {/* =========> ABOUT ME INTRO */}
  <AboutStyle className="container">
    <div className="about-content">
      <h2>
        About_
        <br />
        me
        <span className="colon">:</span>
      </h2>
      <p className="about small-height">
        Hello, my name is John and I am a full-stack web developer who loves to learn and take on
        challenges daily. I'm experienced in mentoring and teaching computer programming to other
        developers. I'm consistently improving upon projects and designs, seeking to inspire others,
        through easy-to-navigate web design.
      </p>
      <BlueCircles />
    </div>

    {/* SKILLS =====> */}
    <div className="skills-container">
      <h4>Skills</h4>
      <ul className="skills-ul">
        <li>
          <span>Front-End Dev</span>
        </li>
        <li>
          <span>React.js</span>
        </li>
        <li>
          <span>Javascript</span>
        </li>
        <li>
          <span>Node.js</span>
        </li>
      </ul>
    </div>
  </AboutStyle>
);

export default About;
