import React from 'react';
import './OffersSection.scss'
import IconTile from "../icon-tile/IconTile";

class OffersSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconFileNameList: [
				{
					imagePath: '/hamburger.png',
					tileTitle: 'BURGER'
				},
				{
					imagePath: '/pizza-icon.png',
					tileTitle: 'PIZZA'
				},
				{
					imagePath: '/fries.png',
					tileTitle: 'FAST FOOD'
				},
				{
					imagePath: '/cupcake-icon.png',
					tileTitle: 'CUPCAKE'
				},
				{
					imagePath: '/sandwich-icon.png',
					tileTitle: 'SANDWICH'
				},
				{
					imagePath: '/spaghetti-icon.png',
					tileTitle: 'SPAGHETTI'
				}
			],
		};
	}


	render() {
		return (
				<section className={'offer'}>
					<h1>Want To Eat?</h1>
					<p>Try our Most Delicious food and it usually take minutes to deliver!</p>
					<div className={'food-tiles'}>
						{this.state.iconFileNameList.map((item, i) => (
								<IconTile key={i} imageUrl={item.imagePath} text={item.tileTitle}/>
						))}
					</div>
				</section>
		);
	}
}

export default OffersSection;
