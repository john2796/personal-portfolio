import styled from 'styled-components';
/*-------------------------------------------------*/
/*                     GRID
/*-------------------------------------------------*/
export const GridContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: -99999;
  .row {
    margin-left: 0px;
    margin-right: 0px;
    .col-xs-3 {
      width: 25%;
      float: left;

      .grid-line {
        border-left: 1px solid #000;
      }
    }
    .col-xs-3:last-child .grid-line {
      border-right: 1px solid #000;
    }
    .hey {
      height: 100vh;
      transition: height 1.2s ease;
    }
  }
`;
