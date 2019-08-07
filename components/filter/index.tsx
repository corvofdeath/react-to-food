import React, { FunctionComponent } from 'react';
import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';

import '../../assets/scss/index.scss';
import { useDispatch } from 'react-redux';
import { FILTER_BY } from '../../redux/filter/types';
interface FilterProps {
	filters: string[];
}

const FilterStyle = styled.div`padding: 20px;`;

const Filter: FunctionComponent<FilterProps> = ({ filters }) => {
	const dispatch = useDispatch();

	return (
		<div id="app-filter">
			<Row>
				<Col className="align-center">
					<FilterStyle>
						{filters.map((filter, index) => {
							return (
								<Button
									key={index}
									color="success"
									className="filter-button"
									onClick={() => dispatch({ type: FILTER_BY, payload: filter })}
								>
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
