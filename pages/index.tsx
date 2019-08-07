import { NextPage } from 'next';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

import Layout from '../components/layout';
import DataService from '../services/data.service';
import FoodList from '../components/food/food-list';
import { AppRoutes } from '../routes';
import Filter from '../components/filter';
import { AppState } from '../redux/store';
import Cart from '../components/cart';

const Index: NextPage = () => {
	const foods = useSelector((state: AppState) => state.filter.foods);
	const foodTypes = DataService.cuisine;

	return (
		<div id="app-index">
			<Container>
				<Layout title="React To Food | Delivery" appRoutes={AppRoutes}>
					<Filter filters={foodTypes} />
					<Row>
						<Col sm="6">
							<FoodList foods={foods} />
						</Col>
						<Col sm="6">
							<Cart />
						</Col>
					</Row>
				</Layout>
			</Container>
		</div>
	);
};

export default Index;
