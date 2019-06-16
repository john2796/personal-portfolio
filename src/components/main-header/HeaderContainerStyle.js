import styled from 'styled-components';

/*-------------------------------------------------*/
/*               HEADER CONTAINER
-------------------------------------------------*/
export const HeaderContainerStyle = styled.div`
  .logo img {
    width: 80px;
    height: 80px;
    margin: 20px;
  }
  .text-top {
    position: absolute;
    left: 0px;
    top: 100px;
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
`;

/*-------------------------------------------------*/
/*                 BLUECIRCLE
/*-------------------------------------------------*/
export const BlueCircle = styled.div`
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
/*-------------------------------------------------*/
/*                TITLE
/*-------------------------------------------------*/

export const TitleContainer = styled.div`
  .name-wrapper {
    display: flex;
    justify-content: space-between;
    h1 {
      order: 2;
    }
  }
  .fs-web {
    transform: rotate(-90deg);
    margin-top: 250px;
    height: 100%;
  }
`;

/*-------------------------------------------------*/
/*                 SOCIALS
/*-------------------------------------------------*/
export const SocialContainer = styled.div`
  position: fixed;
  right: -210px;
  top: 235px;
  z-index: 99;

  ul {
    transform: rotate(-90deg);
  }
  /* ===========> RIGHT SIDE MY_FULL_NAME */
  .jb-miranda {
    position: fixed;
    z-index: 99;
    bottom: 112px;
    right: -104px;

    a {
      transform: rotate(-90deg);
      background: #1f1f1f;
      position: relative;
      text-decoration: line-through;
      display: inline-block;
      font-size: 16px;
      text-transform: inherit;
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
