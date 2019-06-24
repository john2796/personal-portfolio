import React, { lazy, Suspense } from 'react';
import { AppStyle } from './AppStyle';

import HeaderContainer from './components/main-header/HeaderContainer';
import Grid from './components/grid/Grid';
import About from './components/about/About';
import BlueCircles from './components/main-header/BlueCircles';
import Footer from './components/footer/Footer';
import Loading from './components/spinner/Loading';

const ProjectContainer = lazy(() => import('./components/projects/ProjectContainer'));
// things todo :
// -[] Add delay to suspense fallback
// -[] Add smooth scroll (do this last)
// -[] Add a loading
// -[] Add a way to see resume
// -[x] change Lorem ipsum words
// -[x] Update react icon to be same as logo
// -[x] Only have mail github linkedIn on socials
// -[x] connect social media link and decide what todo with my name on left side.
// -[x] Add github links to the project
// -[x] center some image project section
// -[x] decide what to do with text that has white background and white text
const App = () => (
  <Suspense fallback={<Loading />}>
    <AppStyle className="app">
      <Grid />
      <HeaderContainer />
      <About />
      <ProjectContainer />
      <BlueCircles />
      <Footer />
    </AppStyle>
  </Suspense>
);

export default React.memo(App);
