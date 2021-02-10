import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchPacks = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
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

			const packages = data.objects.map((result) => result.package.name);

			dispatch({
				type: ActionType.SEARCH_SUCCESS,
				payload: packages,
			});
		} catch (err) {
			dispatch({
				type: ActionType.SEARCH_ERROR,
				payload: err.message,
			});
		}
	};
};
