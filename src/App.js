import React from 'react';
import { AppStyle } from './AppStyle';

import HeaderContainer from './components/main-header/HeaderContainer';
import Grid from './components/grid/Grid';
import About from './components/about/About';
import ProjectContainer from './components/projects/ProjectContainer';
import BlueCircles from './components/main-header/BlueCircles';
import Footer from './components/footer/Footer';

// things todo :
// -[] Add responsive
// -[] Replace bad images
const App = () => (
  <AppStyle className="app">
    <Grid />
    <HeaderContainer />
    <About />
    <ProjectContainer />
    <BlueCircles />
    <Footer />
  </AppStyle>
);

export default App;
