import { Food, ADD_FOOD, REMOVE_FOOD, CartActionTypes } from './types';

export function addFood (food: Food): CartActionTypes {
	return {
		type: ADD_FOOD,
		payload: food
	};
}

export function removeFood (id: string): CartActionTypes {
	return {
		type: REMOVE_FOOD,
		payload: { id }
	};
}
