import { ActionType } from '../action-types';

interface SearchPacks {
	type: ActionType.SEARCH_PACKS;
}

interface SearchSuccess {
	type: ActionType.SEARCH_SUCCESS;
	payload: string[];
}

interface SearchError {
	type: ActionType.SEARCH_ERROR;
	payload: string;
}

export type Action = SearchPacks | SearchError | SearchSuccess;
