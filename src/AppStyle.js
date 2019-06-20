import styled from 'styled-components';

/*-------------------------------------------------*/
/*                 BLUECIRCLE
/*-------------------------------------------------*/
export const BlueCircle = styled.div`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  border: 18px solid #0097a7;
  border-radius: 40%;
  opacity: ${props => props.opacity || 1};
  position: absolute;
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
    @media (max-width: 991px) {
      font-size: 145px;
      line-height: 160px;
    }
    @media (max-width: 767px) {
      font-size: 130px;
      line-height: 125px;
    }
    @media (max-width: 600px) {
      font-size: 100px;
      line-height: 115px;
    }
  }

  h2,
  .footer-a {
    font-size: 120px;
    line-height: 150px;
    font-weight: 700;
    margin-bottom: 75px;
    @media (max-width: 1199px) {
      font-size: 100px;
      line-height: 120px;
    }
    @media (max-width: 991px) {
      font-size: 80px;
      line-height: 100px;
    }
  }
  h4 {
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    color: rgba(255, 255, 255, 0.8);
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

  h3 {
    font-size: 120px;
    line-height: 150px;
    font-weight: 700;
    margin-bottom: 75px;
    @media (max-width: 1199px) {
      font-size: 100px;
      line-height: 120px;
    }
    @media (max-width: 991px) {
      font-size: 80px;
      line-height: 100px;
    }
  }
  /*-------------------------------------------------*/
  /*              RANDOM_GLOBAL  
/*-------------------------------------------------*/
  .circle {
    color: #ff5252;
    border-radius: 50%;
  }
  .colon {
    color: #ff5252;
  }
  /*-------------------------------------------------*/
  /*                CONTAINER
/*-------------------------------------------------*/
  .container {
    max-width: 1199px;
    width: 83%;
    margin: 0 auto;
  }
`;
