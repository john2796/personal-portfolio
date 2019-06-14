import React from 'react';
import { AppStyle } from './style/AppStyle';

import HeaderContainer from './components/main-header/HeaderContainer';

const App = () => (
  <AppStyle>
    <HeaderContainer />
    <div className="test">testing</div>
  </AppStyle>
);

export default App;
