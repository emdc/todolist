import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import i18n from 'i18n';
import {reducers} from 'store';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(
  combineReducers({
    ...reducers,
    ...i18n.reducers
  }),
  {},
  composeEnhancers(applyMiddleware(thunk))
);
