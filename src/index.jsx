import App from 'view/App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './history';
import {store} from './store';

const renderApp = (AppComponent, storeObj) => {
  const element = document.getElementById('reactroot');

  if (!element) {
    throw new Error('Couldn\'t find element with id root');
  }

  ReactDOM.render(
    <AppContainer>
      <Provider store={storeObj}>
        <Router history={history}>
          <AppComponent />
        </Router>
      </Provider>
    </AppContainer>,
    element
  );
};

store.then((storeObj) => {
  renderApp(App, storeObj);

  if (module.hot) {
    module.hot.accept('view/App', () => {
      /* eslint-disable global-require */
      const NextApp = require('view/App').default;
      /* eslint-disable global-require */

      renderApp(NextApp, storeObj);
    });
  }
});