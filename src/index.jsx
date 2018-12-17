import App from 'view/App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';

const renderApp = (AppComponent, storeObj) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={storeObj}>
        <AppComponent />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
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
