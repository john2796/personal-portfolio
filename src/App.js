import React, { lazy, Suspense } from "react";
import { AppStyle } from "./AppStyle";

import HeaderContainer from "./components/main-header/HeaderContainer";
import Grid from "./components/grid/Grid";
import About from "./components/about/About";
import BlueCircles from "./components/main-header/BlueCircles";
import Footer from "./components/footer/Footer";
import Loading from "./components/spinner/Loading";

const ProjectContainer = lazy(() =>
  import("./components/projects/ProjectContainer")
);

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
