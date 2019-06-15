import React from 'react';
import { GridContainer } from './GridStyle';

const Grid = () => (
  <>
    <GridContainer>
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <div className="grid-line hey" />
          </div>
          <div className="col-xs-3">
            <div className="grid-line hey" />
          </div>
          <div className="col-xs-3">
            <div className="grid-line hey" />
          </div>
          <div className="col-xs-3">
            <div className="grid-line hey" />
          </div>
        </div>
      </div>
    </GridContainer>
  </>
);

export default Grid;
