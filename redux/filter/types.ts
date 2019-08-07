import { Food } from '../cart/types';

export interface FilterState {
	filter?: string;
	search?: string;
	foods: Food[];
}

export const FILTER_BY = 'FILTER_BY';
export const SEARCH_BY = 'SEARCH_BY';

interface FilterByAction {
	type: typeof FILTER_BY;
	payload: string;
}

interface SearchByAction {
	type: typeof SEARCH_BY;
	payload: string;
}

export type FilterActionTypes = FilterByAction | SearchByAction;
