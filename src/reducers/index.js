import { combineReducers } from 'redux';
import logginReducer from './logginReducer';
import todoReducer from './todoReducer';

const reducer = combineReducers({todoReducer, logginReducer});

export default reducer;