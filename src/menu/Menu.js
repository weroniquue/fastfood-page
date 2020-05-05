import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
				<div className={'navbar'}>
					<div className={'logo'}/>

					<div className={'navbar-menu'}>
						<div className={'navbar-navigation'}>
							<Link to="/">Home</Link>
							<Link to="/menu">Menu</Link>
							<a href='#'>Gallery</a>
							<a href='#'>Testiminials</a>
							<a href='#'>Contact us</a>
						</div>
						<div className={'navbar-actions'}>
							<div className={'search-icon'}/>
							<div className={'profile-icon'}/>
							<div className={'basket-icon'}/>
						</div>
					</div>
				</div>
	)
		;
	}
}

export default Menu;
