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

    h3 {
      font-size: 400px;
      line-height: 400px;
      font-weight: 700;
      margin-bottom: 75px;
      color: #1f1f1f;
      margin-left: -7px;
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
`;
