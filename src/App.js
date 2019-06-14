  import React from "react";
import { AppStyle } from "./style/AppStyle";

import HeaderContainer from "./components/main-header/HeaderContainer";

const App = () => (
  <AppStyle>
    {/* top part of the page ======>> */}
    <HeaderContainer />
    <div className="test">tseting</div>
  </AppStyle>
);

export default App;
