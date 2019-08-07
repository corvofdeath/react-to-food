import App, { Container } from 'next/app';
import { NextPage, NextComponentType } from 'next';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withRedux, { MakeStoreOptions } from 'next-redux-wrapper';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/index.scss';
import { initializeStore } from '../redux/store';

type AppProps = {
	Component: NextComponentType;
	store: Store;
	pageProps: any;
};

const ReactToFoodApp: NextPage<AppProps> = ({ Component, store, pageProps }) => {
	return (
		<Container>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Container>
	);
};

const makeStore = (initialState: any, options: MakeStoreOptions) => {
	return initializeStore();
};

export default withRedux(makeStore)(ReactToFoodApp);
