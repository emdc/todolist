import {combineReducers} from 'redux';
import tasks from './tasks';

const appReducer = combineReducers({tasks});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
