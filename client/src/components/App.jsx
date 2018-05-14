import React from 'react';
import {
  // Switch,
  BrowserRouter as Router,
  // Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../scss/main.scss';
import Database from './Database';

const App = () => (
  <MuiThemeProvider >
    <Router>
      <div>
        <Database />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
