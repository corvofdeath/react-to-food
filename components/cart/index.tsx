import React, { FunctionComponent } from 'react';
import { Card, CardBody, CardTitle, CardLink, CardText, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../redux/store';
import { REMOVE_FOOD } from '../../redux/cart/types';
import CartList from './cart-list';

const CardStyle = styled.div`background: #f7f3f3;`;
const DivStyle = styled.div`padding: 5px;`;

const Cart: FunctionComponent = () => {
	const items = useSelector((state: AppState) => state.cart.foods);
	const dispatch = useDispatch();

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
						<CartList foods={items} />
						<DivStyle />
						<hr />
						{items.length > 0 && (
							<Row>
								<Col className="align-right">
									<CardText>
										R${' '}
										<span>
											{items
												.map((food) => food.price * (food.qtd ? food.qtd : 1))
												.reduce((accumulator, next) => accumulator + next)
												.toFixed(2)}
										</span>
									</CardText>
								</Col>
								<Col sm="1" />
							</Row>
						)}
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
