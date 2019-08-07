import React, { FunctionComponent } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import styled from 'styled-components';

import { Food } from '../../redux/cart/types';
import foodIcon from '../../assets/img/food-icon.png';
import '../../assets/scss/index.scss';

interface FoodItemProps {
	food: Food;
}

const DivStyle = styled.div`padding: 10px;`;

const FoodItem: FunctionComponent<FoodItemProps> = ({ food }) => {
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
							<CardLink href="#">Add</CardLink>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default FoodItem;
