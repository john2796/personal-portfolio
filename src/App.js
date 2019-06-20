import React from 'react';
import { AppStyle } from './AppStyle';

import HeaderContainer from './components/main-header/HeaderContainer';
import Grid from './components/grid/Grid';
import About from './components/about/About';
import ProjectContainer from './components/projects/ProjectContainer';
import BlueCircles from './components/main-header/BlueCircles';
import Footer from './components/footer/Footer';

// things todo :
// -[] Add responsive 50% done
// -[] Replace bad images
// -[] remove side social anchor when it get's down to smaller device
// -[] add social nav in the footer..
// -[] remove redux and router not gonna be using here
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
