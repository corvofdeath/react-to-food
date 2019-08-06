import { CartState, CartActionTypes, ADD_FOOD, REMOVE_FOOD } from './types';

const initialState: CartState = {
	foods: []
};

export function cartReducer (state = initialState, action: CartActionTypes): CartState {
	switch (action.type) {
		case ADD_FOOD:
			return {
				foods: [ ...state.foods, action.payload ]
			};
		case REMOVE_FOOD:
			return {
				foods: state.foods.filter((food) => food.id !== action.payload.id)
			};
		default:
			return state;
	}
}
