import { FILTER_BY, SEARCH_BY, FilterActionTypes } from './types';

export function filterBy (filter: string): FilterActionTypes {
	return {
		type: FILTER_BY,
		payload: filter
	};
}

export function searchBy (search: string): FilterActionTypes {
	return {
		type: SEARCH_BY,
		payload: search
	};
}
