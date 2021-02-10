interface PackState {
	loading: boolean;
	error: string | null;
	data: string[];
}

interface SearchPacks {
	type: 'search_packs';
}

interface SearchSuccess {
	type: 'search_success';
	payload: string[];
}

interface SearchError {
	type: 'search_error';
	payload: string;
}

type Action = SearchPacks | SearchError | SearchSuccess;

enum ActionType {
	SEARCH_PACKS = 'search_packs',
	SEARCH_SUCCESS = 'search_success',
	SEARCH_ERROR = 'search_error',
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
