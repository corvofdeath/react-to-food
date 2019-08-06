import React, { FunctionComponent } from 'react';
import { Food } from '../../redux/cart/types';
import FoodItem from './food-item';

interface FoodListProps {
	foods: Food[];
}

const FoodList: FunctionComponent<FoodListProps> = ({ foods }) => {
	return (
		<div id="app-food-item">
			{foods.map((food) => {
				return <FoodItem key={food.id} food={food} />;
			})}
		</div>
	);
};

export default FoodList;
