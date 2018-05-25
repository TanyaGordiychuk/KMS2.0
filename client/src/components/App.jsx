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
  brown50,
  brown200,
  black,
} from 'material-ui/styles/colors';

import '../scss/main.scss';
// import Header from './Header';
import DatabaseWrapper from './DatabaseWrapper';
import Login from './Login';
import Account from './Account';

import {
  login,
  kdb,
  account,
} from '../constants/route-urls';

const muiTheme = getMuiTheme({
  fontFamily: 'Courier New, sans-serif',
  palette: {
    primary1Color: blue500,
    accent1Color: blue500,
  },
  tabs: {
    backgroundColor: brown50,
    selectedTextColor: black,
    textColor: brown200,
  },
  svgIcon: {
    color: blue500,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <Switch>
        <Route path={login} component={Login} exact />
        <Route path={kdb} component={DatabaseWrapper} exact />
        <Route path={`${account}/:id`} component={Account} exact />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
