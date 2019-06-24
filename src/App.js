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
// -[] change Lorem ipsum words
// -[] Update react icon to be same as logo
// -[] Add smooth scroll (do this last)
// -[] Add a loading
// -[x] Only have mail github linkedIn on socials
// -[x] connect social media link and decide what todo with my name on left side.
// -[x] Add github links to the project
// -[x] center some image project section
// -[x] decide what to do with text that has white background and white text
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
