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
  position: relative;
  /* big text ----> */
  .text-top {
    position: absolute;
    left: 0px;
    top: 10px;
    color: #1f1f1f;
    text-transform: uppercase;
    z-index: -100;
    width: 100%;
    @media (max-width: 600px) {
      top: 100px;
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
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
  /* title wrapp */
  .name-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    @media (max-width: 991px) {
      flex-direction: column;
    }
    h1 {
      order: 2;
      @media (max-width: 1199px) {
        order: -1;
      }
      @media (max-width: 991px) {
        order: -1;
        width: 100%;
      }
    }
  }
  .fs-web {
    transform: rotate(-90deg);
    height: 100%;
    @media (max-width: 1199px) {
      transform: inherit;
    }
    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;

/*-------------------------------------------------*/
/*                 SOCIALS
/*-------------------------------------------------*/
export const SocialContainer = styled.div`
  position: fixed;
  right: -110px;
  top: 105px;
  z-index: 99;
  @media (max-width: 767px) {
    display: none;
  }
  ul {
    transform: rotate(-90deg);
  }
  /* ===========> RIGHT SIDE MY_FULL_NAME */
  .jb-miranda {
    position: fixed;
    z-index: 99;
    bottom: 112px;
    left: -72px;
    @media (max-width: 767px) {
      bottom: initial;
      left: initial;
      top: 103px;
      right: -116px;
    }

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
