import React, { FunctionComponent } from 'react';
import { Card, CardBody, CardTitle, CardLink, CardText, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { AppState } from '../../redux/store';

const CardStyle = styled.div`background: #f7f3f3;`;
const DivStyle = styled.div`padding: 5px;`;

const Cart: FunctionComponent = () => {
	const items = useSelector((state: AppState) => state.cart.foods);

	return (
		<div id="app-cart">
			<Card>
				<CardStyle>
					<CardBody>
						<CardTitle>Cart</CardTitle>
						<hr />
						<Row>
							<Col sm="6">
								<CardText>Food</CardText>
							</Col>
							<Col sm="2" className="align-right">
								<CardText>Qtd.</CardText>
							</Col>
							<Col sm="2" className="align-right">
								<CardText>Total</CardText>
							</Col>
							<Col sm="2" />
						</Row>
						<DivStyle />
						{items.map((food) => {
							return (
								<Row>
									<Col sm="6">
										<CardText>{food.title}</CardText>
									</Col>
									<Col sm="2" className="align-right">
										<CardText>1</CardText>
									</Col>
									<Col sm="3" className="align-right">
										<CardText>
											R$ <span>15.00</span>
										</CardText>
									</Col>
									<Col sm="1">
										<CardLink href="#" onClick={(e) => e.preventDefault()}>
											X
										</CardLink>
									</Col>
								</Row>
							);
						})}
						<DivStyle />
						<Row>
							<Col className="align-center">
								{items.length > 0 && <Button color="success">Purchase</Button>}
							</Col>
						</Row>
					</CardBody>
				</CardStyle>
			</Card>
		</div>
	);
};

export default Cart;
