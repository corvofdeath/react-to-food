import { NextPage } from 'next';
import { Button, Container } from 'reactstrap';

import Layout from '../components/layout';

const Index: NextPage = () => {
	return (
		<div id="app-index">
			<Container>
				<Layout title="React To Food | Delivery" />
			</Container>
		</div>
	);
};

export default Index;
