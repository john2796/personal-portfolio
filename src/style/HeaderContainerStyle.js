import styled from 'styled-components';

export const MainHeaderStyle = styled.div`
  .logo img {
    width: 80px;
    height: 80px;
    margin: 20px;
  }
`;

export const TitleStyle = styled.div`
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
  .about-wrapper {
    margin-top: 200px;
  }
  .colon {
    color: #ff5252;
  }
  .about {
    line-height: 38px;
  }
`;

export const SocialStyle = styled.div`
  position: fixed;
  right: -210px;
  top: 235px;
  z-index: 99;
  ul {
    transform: rotate(-90deg);
    list-style: none;
    display: flex;
    li {
      a {
        color: white;
        font-family: 'Inconsolata', monospace;
        text-transform: uppercase;
        font-size: 18px;
        line-height: 28px;
        margin-right: 36px;
        text-decoration: none;
      }
    }
  }
  .jb-miranda {
    position: fixed;
    z-index: 99;
    @media (max-width: 991px) {
      left: inherit;
      right: -75px;
      top: calc(100vh - 135px);
    }
    a {
      transform: rotate(-90deg);
      color: white;
      font-family: 'Inconsolata', monospace;
      font-size: 18px;
      line-height: 28px;
      background: #1f1f1f;
      text-decoration: none;
      position: relative;
      text-decoration: line-through;
      display: inline-block;
      &:hover {
        text-decoration: none;
      }
      i {
        margin-left: 8px;
        font-size: 15px;
      }
    }
  }
`;
