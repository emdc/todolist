import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from 'store/reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = Promise.resolve(createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
));
