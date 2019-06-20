import styled from 'styled-components';

export const AboutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 300px 0;
  /* ABOUT left side content ---> */
  .about-content {
    width: 45%;
    @media (max-width: 991px) {
      width: 90%;
    }
  }

  /* Skills right side ----> */
  .skills-container {
    position: absolute;
    right: 0;
    background-color: #1f1f1f;
    padding: 36px;
    min-width: 30%;
    box-shadow: 0 0 38px rgba(0, 0, 0, 0.3), 0 0 12px rgba(0, 0, 0, 0.22);
    z-index: 1;
    align-self: flex-end;
    @media (max-width: 991px) {
      display: none;
    }
    .skills-ul {
      display: flex;
      flex-direction: column;
    }
    .skills-ul li {
      font-family: 'Inconsolata', monospace;
      font-weight: 300;
      font-size: 18px;
      line-height: 38px;
      position: relative;
      margin-bottom: 15px;
      span {
        display: inline-block;
        position: relative;
        z-index: 2;
        &::after {
          content: '';
          width: 101%;
          height: 7px;
          position: absolute;
          bottom: 9px;
          left: 0;
          background-color: #0097a7;
          z-index: -1;
        }
      }
    }
  }
`;
