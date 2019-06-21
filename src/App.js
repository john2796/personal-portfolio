import React from 'react';
import { AppStyle } from './AppStyle';

import HeaderContainer from './components/main-header/HeaderContainer';
import Grid from './components/grid/Grid';
import About from './components/about/About';
import ProjectContainer from './components/projects/ProjectContainer';
import BlueCircles from './components/main-header/BlueCircles';
import Footer from './components/footer/Footer';

// things todo :
// -[] complete udemy course about hooks first then comback
// -[] Hide side nav when you get half way
// -[] Replace bad images
// -[] fix ImgBook image looks weird on 100%;
// -[] Add github links to the project
// -[] Add responsive 50% done
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
