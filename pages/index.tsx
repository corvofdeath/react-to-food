import { NextPage } from 'next';
import { Button, Container } from 'reactstrap';

import Layout from '../components/layout';
import DataService from '../services/data.service';
import FoodList from '../components/food/food-list';
import { AppRoutes } from '../routes';

const Index: NextPage = () => {
	const foods = DataService.foodList;

	return (
		<div id="app-index">
			<Container>
				<Layout title="React To Food | Delivery" appRoutes={AppRoutes}>
					<FoodList foods={foods} />
				</Layout>
			</Container>
		</div>
	);
};

export default Index;
