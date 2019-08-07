import React, { FunctionComponent } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import styled from 'styled-components';

import { Food, ADD_FOOD } from '../../redux/cart/types';
import foodIcon from '../../assets/img/food-icon.png';
import '../../assets/scss/index.scss';
import { useDispatch } from 'react-redux';

interface FoodItemProps {
	food: Food;
}

const DivStyle = styled.div`padding: 10px;`;

const FoodItem: FunctionComponent<FoodItemProps> = ({ food }) => {
	const dispatch = useDispatch();

	return (
		<div id="app-food-item">
			<Card>
				<Row>
					<Col sm="2" className="align-center image-center">
						<img className="food-img" src={foodIcon} />
					</Col>
					<DivStyle />
					<Col sm="9">
						<CardBody>
							<CardTitle>{food.title}</CardTitle>
							<CardSubtitle>
								<strong>Price: </strong> <span>R$ </span>
								{food.price}
							</CardSubtitle>
							<CardText>
								<strong>Cuisine: </strong>
								{food.cuisine}
							</CardText>
							<CardLink
								href="#"
								onClick={(e) => {
									e.preventDefault();
									dispatch({ type: ADD_FOOD, payload: food });
								}}
							>
								Add
							</CardLink>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default FoodItem;
