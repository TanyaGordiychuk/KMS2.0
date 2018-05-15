import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../scss/main.scss';
import Header from './Header';
import Database from './Database';
import Login from './Login';

import {
  root,
  kdb,
} from '../constants/route-urls';

const App = () => (
  <MuiThemeProvider >
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path={root} component={Login} exact={false} />
          <Route path={kdb} component={Database} exact={false} />
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
