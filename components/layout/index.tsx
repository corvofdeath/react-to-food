import React, { FunctionComponent } from 'react';

import Header from '../header';
import NavBar, { NavBarProps } from '../navbar';

interface LayoutProps {
	title?: string;
	appRoutes: NavBarProps;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, title = 'Default Title', appRoutes }) => {
	return (
		<div id="app-layout">
			<Header title={title} />
			<NavBar routes={appRoutes.routes} />
			{children}
		</div>
	);
};

export default Layout;
