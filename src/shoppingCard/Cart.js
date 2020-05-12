import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./Cart.scss";
import {addQuantity, goToStep, removeItem, showSpinner, subtractQuantity} from "../acrions/cartActions";
import Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";

class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			validated: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleRemove = (id) => {
		this.props.removeItem(id);
	};
	handleAddQuantity = (id) => {
		this.props.addQuantity(id);
	};
	handleSubtractQuantity = (id) => {
		this.props.subtractQuantity(id);
	};
	handleStep = (step) => {
		this.props.goToStep(step);
	};

	handlePay(buyerData) {
		this.props.showOrHideSpinner(true);
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
			products: products,
			buyer: buyerData
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

	handleSubmit(e) {
		e.preventDefault(); // prevent native submitting behavior
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
			e.preventDefault();
		} else {
			const buyerData = {
				email: form.elements.email.value,
				firstName: form.elements.firstName.value,
				lastName: form.elements.lastName.value,
				delivery: {
					street: form.elements.address.value,
					postalCode: form.elements.zip.value,
					city: form.elements.city.value,
				}
			};
			this.handlePay(buyerData);
		}
		this.setState(state => ({
			validated: true
		}));
	}

	render() {
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
						<Button variant="success" onClick={() => this.handleStep(2)} size="lg">Next</Button>
					</div>
				</div>
		) : (
				<div className={'empty-basket-details'}>
					<div className={"pizza-logo"}/>
					<h2>Your cart is empty</h2>
					<p>Looks like you haven't added anything to your cart yet</p>
				</div>
		);

		let personalData = (
				<div className={'personal-form'}>
					<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} md="6" controlId="firstName">
								<Form.Label>First name</Form.Label>
								<Form.Control
										required
										type="text"
										placeholder="First name"
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="6" controlId="lastName">
								<Form.Label>Last name</Form.Label>
								<Form.Control
										required
										type="text"
										placeholder="Last name"
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="12" controlId="email">
								<Form.Label>Email</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
											type="email"
											placeholder="E-mail"
											aria-describedby="inputGroupPrepend"
											required
									/>
									<Form.Control.Feedback type="invalid">
										Please type valid email.
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="12" controlId="address">
								<Form.Label>Address</Form.Label>
								<Form.Control type="text" placeholder="Address" required />
								<Form.Control.Feedback type="invalid">
									Please provide a valid address.
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="6" controlId="zip">
								<Form.Label>Zip</Form.Label>
								<Form.Control type="text" placeholder="Zip" required />
								<Form.Control.Feedback type="invalid">
									Please provide a valid zip.
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="6" controlId="city">
								<Form.Label>City</Form.Label>
								<Form.Control type="text" placeholder="City" required />
								<Form.Control.Feedback type="invalid">
									Please provide a valid city.
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<div className={"cart-summary"}>
							<Button variant="success" onClick={() => this.handleStep(1)} size="lg">Back</Button>
							<div className={"cart-summary-total"}>TOTAL: {this.props.totalPrice}$</div>
							<Button type="submit" variant="success" size="lg">Pay</Button>
						</div>
					</Form>
				</div>
		);

		return (
				<div className={"cart-container"}>
					{this.props.showSpinner ? <div className={'spinner'}><Spinner animation="border" style={{width: 5+"em", height: 5+"em"}} variant="warning"/></div> :	''}
					{this.props.step === 1 ? addedItems : personalData}
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
		showSpinner: state.shouldShowSpinner,
		step: state.step
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
		showOrHideSpinner: (shouldShowSpinner) => {
			dispatch(showSpinner(shouldShowSpinner))
		},
		goToStep: (step) => {
			dispatch(goToStep(step))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
