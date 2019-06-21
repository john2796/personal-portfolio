import styled from 'styled-components';

export const FooterStyle = styled.div`
  padding: 150px 0 50px 0;
  position: relative;
  .big-text {
    position: absolute;
    left: 0px;
    top: 50px;
    color: #1f1f1f;
    text-transform: uppercase;
    z-index: -100;
    @media (max-width: 991px) {
      top: 200px;
    }

    h3 {
      font-size: 400px;
      line-height: 400px;
      font-weight: 700;
      margin-bottom: 75px;
      color: #1f1f1f;
      margin-left: -7px;
      @media (max-width: 1199px) {
        font-size: 300px;
        line-height: 300px;
      }
      @media (max-width: 991px) {
        display: none;
      }
    }
  }
  h2 {
    .footer-a {
      color: var(--red);
      text-decoration: line-through;
      font-family: inherit;
      text-transform: initial;
      &:hover {
        text-decoration: inherit;
      }
    }
  }
  /* navigation footer */
  .footer-nav {
    display: block;
    position: initial;
    z-index: 99;

    ul {
      transform: initial;
      display: flex;
      flex-wrap: wrap;
      li > a {
        line-height: 2;
      }
    }
  }
`;
