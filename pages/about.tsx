import { NextPage } from 'next';
import { Container } from 'reactstrap';

import Layout from '../components/layout';
import { AppRoutes } from '../routes';

const About: NextPage = () => {
	return (
		<div id="app-bout">
			<Container>
				<Layout title="React To Food | Delivery" appRoutes={AppRoutes}>
					<h1>About Page</h1>
				</Layout>
			</Container>
		</div>
	);
};

export default About;
