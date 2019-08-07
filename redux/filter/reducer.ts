import { FilterState, FilterActionTypes, FILTER_BY, SEARCH_BY } from './types';
import DataService from '../../services/data.service';

const initialState: FilterState = {
	foods: DataService.foodList,
	search: '',
	filter: 'all'
};

export function filterReducer (state = initialState, action: FilterActionTypes): FilterState {
	switch (action.type) {
		case FILTER_BY:
			return filterByHandle(action.payload);
		case SEARCH_BY:
			return state;
		default:
			return state;
	}
}

function filterByHandle (filter: string): FilterState {
	if (filter === 'all') return { foods: [ ...DataService.foodList ], filter: 'all' };
	else return { foods: DataService.foodList.filter((food) => food.cuisine === filter), filter: filter };
}
