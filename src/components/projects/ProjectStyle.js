import styled from 'styled-components';

export const ProjectStyle = styled.section`
  /* project above content */
  /* for bluecircles */
  position: relative;
  .featured-works-bookImg-p-wrapper {
    display: flex;
    flex-direction: column;
    /* ----- MEDIA QUERIES -------- */
    @media (max-width: 991px) {
      .featured-text {
        order: -1;
      }
      .project-flex {
        order: 1;
        flex-direction: column;
        .bookImg {
          max-width: 100%;
          width: 100%;
          height: 500px;
          max-height: 100%;
        }
        p {
          align-self: flex-start;
          width: 100%;
          margin-top: 100px;
        }
      }
    }
  }
  .project-flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .bookImg {
      max-width: 500px;
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
    height: 100%;
    img {
      min-width: 340px;
      max-width: 340px;
      height: 310px;
      object-fit: cover;
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
    left: 98px;
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
