import React from 'react';
import './MenuItem.scss'

class MenuItem extends React.Component {
	render() {
		return (
				<div className={'menu-item'}>
					<img src={'/pizza.png'} className={'menu-image'}/>
					<h3>{this.props.name}</h3>
					<div>{this.props.ingredients}</div>
					<div className={'menu-action'}>
						<button className={'order-button small-btn'}>Add to card</button>
						<div className={'item-price'}>{this.props.price}</div>
					</div>
				</div>
		);
	}
}

export default MenuItem;
