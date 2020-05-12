import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';
import {goToStep} from "../acrions/cartActions";
import {connect, mapDispatchToProps} from "react-redux";

class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.setStep = this.setStep.bind(this);
	}
	render() {
		return (
				<div className={'custom-navbar'}>
					<div className={'logo'}/>

					<div className={'navbar-menu'}>
						<div className={'navbar-navigation'}>
							<Link to="/">Home</Link>
							<Link to="/menu">Menu</Link>
						</div>
						<div className={'navbar-actions'}>
							<div className={'basket-icon'}><Link to="/cart" onClick={this.setStep}/></div>
							<div className={'basket-total'} id={'total-basket'}/>
						</div>
					</div>
				</div>
		)
				;
	}

	setStep() {
		this.props.goToStep(1);
	}
}

const mapStateToProps = (dispatch) => {
	return {
		goToStep: (step) => {
			dispatch(goToStep(step));
		}
	}
};
export default connect(null, mapStateToProps)(Menu);
