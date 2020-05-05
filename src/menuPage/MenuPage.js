import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './MenuPages.scss';

class MenuPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItems: [
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				},
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				},
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				},
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				},
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				},
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				}
			],
		};
	}


	render() {
		return (
				<div className={'menu-container'}>
					{this.state.menuItems.map((item) => (
							<MenuItem name={item.name} ingredients={item.ingredients} price={item.price}/>
					))}
					</div>

		);
	}
}

export default MenuPage;
