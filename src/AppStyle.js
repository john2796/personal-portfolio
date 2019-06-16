import styled from 'styled-components';

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
    max-width: 87%;
    margin: 0 auto;
  }
`;
