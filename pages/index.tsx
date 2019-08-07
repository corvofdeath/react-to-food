import { NextPage } from 'next';
import React from 'react';
import { Container } from 'reactstrap';
import { shallowEqual, useSelector } from 'react-redux';

import Layout from '../components/layout';
import DataService from '../services/data.service';
import FoodList from '../components/food/food-list';
import { AppRoutes } from '../routes';
import Filter from '../components/filter';

const foods = DataService.foodList;
const foodTypes = DataService.cuisine;

const Index: NextPage = () => {
	const asd = useSelector((state: any) => state.filter);
	console.log(asd);

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
