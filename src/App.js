import React from 'react';
import { AppStyle } from './AppStyle';
import HeaderContainer from './components/main-header/HeaderContainer';
import Grid from './components/grid/Grid';

const App = () => (
  <AppStyle className="app">
    <Grid />
    <HeaderContainer />
    <div className="test">testing</div>
  </AppStyle>
);

export default App;
