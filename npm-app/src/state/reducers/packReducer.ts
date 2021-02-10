interface PackState {
	loading: boolean;
	error: string | null;
	data: string[];
}

interface Action {
	type: string;
	payload?: any;
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

const packReducer = (state: PackState, action: Action): PackState => {
	switch (action.type) {
		case 'search_packs':
			return { loading: true, error: null, data: [] };
		case 'search_success':
			return { loading: false, error: null, data: action.payload };
		case 'search_error':
			return { loading: false, error: action.payload, data: [] };

		default:
			return state;
	}
};
