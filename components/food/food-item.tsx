import React, { FunctionComponent } from 'react';
import { Row, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Food } from '../../redux/cart/types';

interface FoodItemProps {
	food: Food;
}

const FoodItem: FunctionComponent<FoodItemProps> = ({ food }) => {
	return (
		<div id="app-food-item">
			<Row>
				<Card>
					<CardBody>
						<CardTitle>{food.title}</CardTitle>
						<CardSubtitle>{food.price}</CardSubtitle>
						<CardText>{food.cuisine}</CardText>
					</CardBody>
				</Card>
			</Row>
		</div>
	);
};

export default FoodItem;
