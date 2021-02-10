import axios from 'axios';
import { ActionTypes, ActionType } from '../action-types';
import { Action } from '../actions';

const searchPacks = (term: string) => {
	return async (dispatch: any) => {
		dispatch({
			type: ActionType.SEARCH_PACKS,
		});

		try {
			const { data } = await axios.get(
				'https://registry.npmjs.org/-/v1/search',
				{
					params: {
						text: term,
					},
				}
			);

			const names = data.objects.map((result) => result.package.name);
		} catch (err) {
			dispatch({
				type: ActionType.SEARCH_ERROR,
				payload: err.message,
			});
		}
	};
};
