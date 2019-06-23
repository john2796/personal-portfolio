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
// - [] Add smooth scroll
// -[] Add github links to the project
// -[] center some image project section
// -[] decide what to do with text that has white background and white text
// -[] Update react icon to be same as logo
// -[x] Only have mail github linkedIn on socials
// -[x] connect social media link and decide what todo with my name on left side.
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
