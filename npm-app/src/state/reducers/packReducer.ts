import { ActionType } from '../action-types';
import { Action } from '../actions';

interface PackState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const packReducer = (state: PackState, action: Action): PackState => {
	switch (action.type) {
		case ActionType.SEARCH_PACKS:
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCH_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_ERROR:
			return { loading: false, error: action.payload, data: [] };

		default:
			return state;
	}
};

export default packReducer;
