import React, { FunctionComponent } from 'react';

import { Food } from '../../redux/cart/types';
import CartListItem from './cart-list-item';

interface CartListProps {
	foods: Food[];
}

const CartList: FunctionComponent<CartListProps> = ({ foods }) => {
	return (
		<div id="app-cart-list">
			{foods.map((food) => {
				return <CartListItem key={food.id} food={food} />;
			})}
		</div>
	);
};

export default CartList;
