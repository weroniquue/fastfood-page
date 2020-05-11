import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
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
							<div className={'basket-icon'}>	<Link to="/cart"/></div>
							<div className={'basket-total'} id={'total-basket'}/>
						</div>
					</div>
				</div>
	)
		;
	}
}

export default Menu;
