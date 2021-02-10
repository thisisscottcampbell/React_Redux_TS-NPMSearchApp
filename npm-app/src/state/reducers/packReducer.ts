interface PackState {
	loading: boolean;
	error: string | null;
	data: string[];
}

interface Action {
	type: string;
	payload?: any;
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
