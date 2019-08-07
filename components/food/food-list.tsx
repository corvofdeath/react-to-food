import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { Food } from '../../redux/cart/types';
import FoodItem from './food-item';

interface FoodListProps {
	foods: Food[];
}

const FoodList: FunctionComponent<FoodListProps> = ({ foods }) => {
	return (
		<div id="app-food-list">
			<Row>
				<Col>
					<div id="app-food-item">
						{foods.map((food) => {
							return <FoodItem key={food.id} food={food} />;
						})}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default FoodList;
