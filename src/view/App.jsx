import * as React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import {Home, NotFound} from 'view/pages';
import './App.scss';


/* eslint-disable react/jsx-max-props-per-line */
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
/* eslint-enable react/jsx-max-props-per-line */

export default withRouter(App);
