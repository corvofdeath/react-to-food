import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

import logo from '../../assets/img/react-to-food-logo.png';

interface HeaderProps {
	title?: string;
}

const HeaderStyle = styled.div`
	text-align: center;
	padding-top: 50px;
`;

const TitleStyle = styled.h1`font-family: fantasy;`;

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
	return (
		<div id="app=header">
			<Row>
				<Col>
					<HeaderStyle>
						<img src={logo} />
						<TitleStyle>{title}</TitleStyle>
					</HeaderStyle>
				</Col>
			</Row>
		</div>
	);
};

export default Header;
