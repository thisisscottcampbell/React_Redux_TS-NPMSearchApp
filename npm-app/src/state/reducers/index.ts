import { combineReducers } from 'redux';
import packReducer from './packReducer';

const reducers = combineReducers({
	packs: packReducer,
});

export default reducers;
