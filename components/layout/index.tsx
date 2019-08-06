import React, { FunctionComponent } from 'react';

import Header from '../header';

interface LayoutProps {
	title?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, title = 'Default Title' }) => {
	return (
		<div id="app-layout">
			<Header title={title} />
			{children}
		</div>
	);
};

export default Layout;
