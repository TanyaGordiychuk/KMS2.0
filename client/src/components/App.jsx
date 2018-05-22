import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
// lightGreen500,
  blue500,
} from 'material-ui/styles/colors';

import '../scss/main.scss';
// import Header from './Header';
import DatabaseWrapper from './DatabaseWrapper';
import Login from './Login';

import {
  login,
  kdb,
} from '../constants/route-urls';

const muiTheme = getMuiTheme({
  fontFamily: 'Courier New, sans-serif',
  palette: {
    primary1Color: blue500,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <Switch>
        <Route path={login} component={Login} exact />
        <Route path={kdb} component={DatabaseWrapper} exact />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
