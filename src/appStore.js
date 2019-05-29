import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {reducers} from 'store';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(
  combineReducers({...reducers}),
  {},
  composeEnhancers(applyMiddleware(thunk))
);
