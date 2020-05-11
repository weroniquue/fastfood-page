import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./Cart.scss";
import {addQuantity, removeItem, showSpinner, subtractQuantity} from "../acrions/cartActions";
import Button from 'react-bootstrap/Button'

class Cart extends Component {

	handleRemove = (id) => {
		this.props.removeItem(id);
	};
	handleAddQuantity = (id) => {
		this.props.addQuantity(id);
	};
	handleSubtractQuantity = (id) => {
		this.props.subtractQuantity(id);
	};

	handlePay = () => {
		this.props.showSpinner(true);
		const products = this.props.items.map(item => {
			return {
				name: item.name,
				unitPrice: item.price * 100,
				quantity: item.quantity
			}
		});

		const data = {
			continueUrl: "https://fast-burgers.herokuapp.com/thankyou",
			customerIp: "127.0.0.1",
			merchantPosId: "386261",
			description: "Płatność za żywność",
			currencyCode: "PLN",
			totalAmount: this.props.totalPrice * 100,
			products: products
		};

		fetch('https://payment-payu-api.herokuapp.com/pay', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => response.json())
				.then((response) => {
				if (response.redirectUri){
					window.location = response.redirectUri;
				}
		})
	};

	render() {
		console.log(this.props);
		let addedItems = this.props.items.length ? (
				<div className={"cart-details"}>
					<h1>Your cart:</h1>
					<div>
						{this.props.items.map((item) => {
							return (
									<div className="collection-item" key={item.id}>
										<img src={item.img} alt={item.img} className="collection-item-img"/>
										<div className="item-desc">
											<h3 className="title">{item.name}</h3>
											<p>{item.ingredients}</p>
											<div>Price: {item.price}$</div>
											<div>
												Quantity:
												<div className="add-remove">
													<Link to="/cart">
														<i className="fa fa-plus-circle" onClick={() => {
															this.handleAddQuantity(item.id)
														}}/>
													</Link>
													<div>{item.quantity}</div>
													<Link to="/cart">
														<i className="fa fa-minus-circle" onClick={() => {
															this.handleSubtractQuantity(item.id)
														}}/>
													</Link>
												</div>
											</div>
											<Button variant="warning" onClick={() => {this.handleRemove(item.id)}}>Remove</Button>
										</div>
									</div>
							);
						})}
					</div>
					<div className={"cart-summary"}>
						<div className={"cart-summary-total"}>TOTAL: {this.props.totalPrice}$</div>
						<Button variant="success" onClick={() => this.handlePay()} size="lg">Pay</Button>
					</div>
				</div>
		) : (
				<div className={'empty-basket-details'}>
					<div className={"pizza-logo"}/>
					<h2>Your cart is empty</h2>
					<p>Looks like you haven't added anything to your cart yet</p>
				</div>
		);

		return (
				<div className={"cart-container"}>
					{addedItems}
				</div>
		);
	}
}

function roundNumber(number) {
	var newnumber = Number(number + '').toFixed(2);
	return parseFloat(newnumber);
}

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
		totalPrice: roundNumber(state.total),
		showSpinner: state.shouldShowSpinner
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (id) => {
			dispatch(removeItem(id))
		},
		addQuantity: (id) => {
			dispatch(addQuantity(id))
		},
		subtractQuantity: (id) => {
			dispatch(subtractQuantity(id))
		},
		showSpinner: (shouldShowSpinner) => {
			dispatch(showSpinner(shouldShowSpinner))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
