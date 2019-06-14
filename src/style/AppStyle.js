import styled from 'styled-components';

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

export const AppStyle = styled.div`
  /*-------------------------------------------------*/
  /*                GENERAL
/*-------------------------------------------------*/

  h1 {
    font-size: 165px;
    line-height: 170px;
    font-weight: 700;
    letter-spacing: 2px;
    z-index: 23;
    @media (max-width: 1199px) {
    }
    @media (max-width: 991px) {
      font-size: 145px;
      line-height: 160px;
    }
    @media (max-width: 767px) {
    }
    @media (max-width: 600px) {
    }
    @media (max-width: 480px) {
    }
    @media (max-width: 380px) {
    }
  }

  h2 {
    font-size: 100px;
    line-height: 120px;
    font-weight: 700;
    margin-bottom: 75px;
    /* @media (max-width: 1199px) {
    } */
    @media (max-width: 991px) {
      font-size: 80px;
      line-height: 100px;
    }
    /* @media (max-width: 767px) {
    }
    @media (max-width: 600px) {
    }
    @media (max-width: 480px) {
    }
    @media (max-width: 380px) {
    } */
  }

  p {
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    color: rgba(255, 255, 255, 0.8);
    /* @media (max-width: 1199px) {
    } */
    @media (max-width: 991px) {
      line-height: 28px;
    }
    /* @media (max-width: 767px) {
    }
    @media (max-width: 600px) {
    }
    @media (max-width: 480px) {
    }
    @media (max-width: 380px) {
    } */
  }

  ul {
    list-style: none;
    display: flex;
  }

  a {
    color: white;
    font-family: 'Inconsolata', monospace;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 28px;
    margin-right: 36px;
    text-decoration: none;
  }

  .circle {
    color: #ff5252;
  }

  /* ============> CONTAINER  */

  .container {
    border: 1px solid red;
    max-width: 87%;
    margin: 0 auto;
  }

  /* spacing on bottom of site need to remove later  */

  .test {
    margin-bottom: 5000px;
  }
`;
