export interface Food {
	id: string;
	title: string;
	price: number;
	cuisine: string;
	qtd?: number;
}

export interface CartState {
	foods: Food[];
}

export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FOOD = 'REMOVE_FOOD';

interface AddFoodAction {
	type: typeof ADD_FOOD;
	payload: Food;
}

interface RemoveFoodAction {
	type: typeof REMOVE_FOOD;
	payload: { id: string };
}

export type CartActionTypes = AddFoodAction | RemoveFoodAction;
