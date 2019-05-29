import * as React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import {Home, NotFound} from 'view/pages';
import i18n from 'i18n';
import './App.scss';


class App extends React.Component {
  constructor (props) {
    super(props);

    i18n.actions.changeLocale('en');
    i18n.actions.changeTranslationsByLocale(
      {
        tasks: {empty: 'No stored tasks'}
      },
      'en'
    );
  }

  render () {
    /* eslint-disable react/jsx-max-props-per-line */
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
    /* eslint-enable react/jsx-max-props-per-line */
  }
}

export default withRouter(App);
