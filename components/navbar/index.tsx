import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Route {
	name: string;
	path: string;
}

export interface NavBarProps {
	routes: Route[];
}

const NavBarStyle = styled.div`text-align: center;`;
const LinkStyle = { margin: '20px' };

const NavBar: FunctionComponent<NavBarProps> = ({ routes }) => {
	return (
		<div id="app-navbar">
			<NavBarStyle>
				{routes.map((route, index) => {
					return (
						<Link key={index} href={route.path}>
							<a style={LinkStyle}>{route.name}</a>
						</Link>
					);
				})}
			</NavBarStyle>
		</div>
	);
};

export default NavBar;
