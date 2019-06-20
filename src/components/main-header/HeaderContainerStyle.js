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
`;

/*-------------------------------------------------*/
/*                TITLE
/*-------------------------------------------------*/

export const TitleContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* big text ----> */
  .text-top {
    position: absolute;
    left: 0px;
    top: -100px;
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
  /* title wrapp */
  .name-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    position: relative;
    h1 {
      order: 2;
    }
  }
  .fs-web {
    transform: rotate(-90deg);
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
