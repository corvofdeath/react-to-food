import React, { FunctionComponent, MouseEvent } from 'react';
import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';

import '../../assets/scss/index.scss';
interface FilterProps {
	filters: string[];
}

const FilterStyle = styled.div`padding: 20px;`;

const Filter: FunctionComponent<FilterProps> = ({ filters }) => {
	return (
		<div id="app-filter">
			<Row>
				<Col className="align-center">
					<FilterStyle>
						{filters.map((filter, index) => {
							return (
								<Button key={index} color="success" className="filter-button">
									{filter}
								</Button>
							);
						})}
					</FilterStyle>
				</Col>
			</Row>
		</div>
	);
};

export default Filter;
