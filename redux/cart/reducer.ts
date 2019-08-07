import { CartState, CartActionTypes, ADD_FOOD, REMOVE_FOOD, Food } from './types';

const initialState: CartState = {
	foods: []
};

export function cartReducer (state = initialState, action: CartActionTypes): CartState {
	switch (action.type) {
		case ADD_FOOD:
			return addFoodHandle(state.foods, action.payload);
		case REMOVE_FOOD:
			return removeFoodHandle(state.foods, action.payload.id);
		default:
			return state;
	}
}

function addFoodHandle (foods: Food[], newFood: Food): CartState {
	if (foods.length === 0) return isNewFood(foods, newFood);

	const inCart = foods.filter((food) => food.id === newFood.id);
	if (inCart.length === 0) return isNewFood(foods, newFood);

	const index = foods.lastIndexOf(inCart[0]);
	const qtd = inCart[0].qtd ? inCart[0].qtd + 1 : 1;
	foods[index].qtd = qtd;

	return { foods: [ ...foods ] };
}

function isNewFood (list: Food[], newFood: Food): CartState {
	newFood.qtd = 1;
	return { foods: [ ...list, newFood ] };
}

function removeFoodHandle (foods: Food[], id: string): CartState {
	const inCart = foods.filter((food) => food.id === id);
	if (inCart[0].qtd === 1) {
		return { foods: foods.filter((food) => food.id !== id) };
	}

	const index = foods.lastIndexOf(inCart[0]);
	const qtd = inCart[0].qtd ? inCart[0].qtd - 1 : 1;
	foods[index].qtd = qtd;

	return { foods: [ ...foods ] };
}
