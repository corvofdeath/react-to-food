import App, { Container } from 'next/app';
import { NextPage, NextComponentType } from 'next';
import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/index.scss';

type AppProps = {
	Component: NextComponentType;
	pageProps: any;
};

const ReactToFoodApp: NextPage<AppProps> = ({ Component, pageProps }) => {
	const reduxStore = initializeStore();

	return (
		<Container>
			<Provider store={reduxStore}>
				<Component {...pageProps} />
			</Provider>
		</Container>
	);
};

export default ReactToFoodApp;
