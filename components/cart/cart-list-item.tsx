import React, { FunctionComponent } from 'react';
import { CardLink, CardText, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { REMOVE_FOOD, Food } from '../../redux/cart/types';

interface CartListItemProps {
	food: Food;
}

const CartListItem: FunctionComponent<CartListItemProps> = ({ food }) => {
	const dispatch = useDispatch();

	return (
		<div id="app-cart-list-item">
			<Row key={food.id}>
				<Col sm="auto" md="6">
					<CardText>{food.title}</CardText>
				</Col>
				<Col sm="auto" md="2" className="align-right">
					<CardText>{food.qtd}</CardText>
				</Col>
				<Col sm="auto" md="3" className="align-right">
					<CardText>
						R$ <span>{(food.price * (food.qtd ? food.qtd : 1)).toFixed(2)}</span>
					</CardText>
				</Col>
				<Col sm="auto" md="1">
					<CardLink
						href="#"
						onClick={(e) => {
							e.preventDefault();
							dispatch({ type: REMOVE_FOOD, payload: { id: food.id } });
						}}
					>
						X
					</CardLink>
				</Col>
			</Row>
		</div>
	);
};

export default CartListItem;
