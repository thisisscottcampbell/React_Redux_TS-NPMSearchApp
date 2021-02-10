interface PackState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const reducer = (state: PackState, action: any) => {
	switch (action.type) {
		case 'search_packs':
			return { loading: true, error: null, data: [] };
		case 'search_packs_success':
			return { loading: false, error: null, data: action.payload };
		case 'search_packs_error':
			return { loading: false, error: action.payload, data: [] };

		default:
			return state;
	}
};
