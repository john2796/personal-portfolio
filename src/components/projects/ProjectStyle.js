import styled from 'styled-components';

export const ProjectStyle = styled.section`
  /* project above content */
  .project-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bookImg {
      max-width: 100%;
      height: auto;
      display: block;
      box-shadow: 0 0 38px rgba(0, 0, 0, 0.3), 0 0 12px rgba(0, 0, 0, 0.22);
      opacity: 0.5;
      z-index: 4;
      transition: all 0.4s ease;
      width: 50%;
    }
    p {
      align-self: flex-start;
      width: 30%;
      margin-top: -100px;
    }
  }

  /* project parent container ------> */
  .projectCard-wrap {
    display: flex;
    margin-top: 250px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  /* project cards --------------> */
  .project-card {
    width: 39.33333333%;
    cursor: pointer;
    position: relative;
    img {
      height: 310px;
      object-fit: cover;
      /* opacity: 0.8;  only add it to white images*/
      display: block;
      transition: all 0.4s ease;
      box-shadow: 0 0 38px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.8);
    }

    .card-title {
      font-size: 60px;
      line-height: 80px;
      font-weight: 700;
      letter-spacing: 2px;
      margin-top: -90px;
      position: relative;
      z-index: 4;
      margin-left: 25px;
    }
    .card-title:after {
      content: '';
      font-family: 'Inconsolata', monospace;
      z-index: 1;
      font-size: 16px;
      width: 234px;
      height: 50%;
      background-color: rgba(217, 217, 217, 0.4);
      position: absolute;
      text-align: center;
      font-family: 'FontAwesome';
      opacity: 0.5;
      /* transform: rotate(90deg);
      top: -200px;
      right: -25px; */
    }

    a.link {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      width: 100%;
    }

    /* hover effects */
    .text::after {
      content: 'view project \f178';
      opacity: 1;
    }
    .dark {
      box-shadow: 0 0 38px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.8);
      opacity: 0.2;
      z-index: 1;
    }
  }
  /* Project card add margin spacing  && card hover white style */
  /* view project style  */
  .card-0 .card-title:after,
  .card-2 .card-title:after,
  .card-4 .card-title:after {
    transform: rotate(90deg);
    top: -200px;
    right: -25px;
  }
  .card-1 .card-title:after,
  .card-3 .card-title:after,
  .card-5 .card-title:after {
    top: -182px;
    left: -85px;
    right: 0;
  }
  /* position card */
  .card-1 {
    margin-top: -300px;
  }
  .card-3,
  .card-5 {
    margin-top: -150px;
  }

  .card-2,
  .card-4 {
    margin-top: 150px;
  }
  /* darken image of white bg */
  .card-4 img,
  .card-5 img {
    opacity: 0.8;
  }
`;
