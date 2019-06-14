import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import store from './store/store';
// import main scss
import './style/main.scss';

import * as serviceWorker from './serviceWorker';

const AppWithRouter = withRouter(App);
const app = (
  // need to fix eslint error
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
