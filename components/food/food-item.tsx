import React, { FunctionComponent } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import styled from 'styled-components';

import { Food } from '../../redux/cart/types';
import foodIcon from '../../assets/img/food-icon.png';
import '../../assets/scss/index.scss';

interface FoodItemProps {
	food: Food;
}
const FoodItem: FunctionComponent<FoodItemProps> = ({ food }) => {
	return (
		<div id="app-food-item">
			<Card>
				<Row>
					<Col sm="2" className="align-center">
						<img className="food-img" src={foodIcon} />
					</Col>
					<Col sm="10">
						<CardBody>
							<CardTitle>{food.title}</CardTitle>
							<CardSubtitle>
								<strong>Preço: </strong> <span>R$ </span>
								{food.price}
							</CardSubtitle>
							<CardText>
								<strong>Categoria: </strong>
								{food.cuisine}
							</CardText>
							<CardLink href="#">Adicionar</CardLink>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default FoodItem;
