import { NextPage } from 'next';
import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

import Layout from '../components/layout';
import DataService from '../services/data.service';
import FoodList from '../components/food/food-list';
import { AppRoutes } from '../routes';
import Filter from '../components/filter';
import { AppState } from '../redux/store';

const Index: NextPage = () => {
	const foods = useSelector((state: AppState) => state.filter.foods);
	const foodTypes = DataService.cuisine;

	return (
		<div id="app-index">
			<Container>
				<Layout title="React To Food | Delivery" appRoutes={AppRoutes}>
					<Filter filters={foodTypes} />
					<FoodList foods={foods} />
				</Layout>
			</Container>
		</div>
	);
};

export default Index;
