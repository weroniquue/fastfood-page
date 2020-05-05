import React from 'react';
import './PopularRecipes.scss'
import SectionSeparator from "../section-separator/SectionSeparator";
import MenuItem from "../MenuItem/MenuItem"

class PopularRecipes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			popularDishes: [
				{
					name: 'vvv',
					ingredients: 'vvv',
					price: 'vv'
				},
			],
		};
	}

	render() {
		return (
				<section className={'popular-recipes'}>
					<SectionSeparator topSeparator={true}/>
					<h1>Our Most Popular Recipes</h1>
					{this.state.popularDishes.map((item) => (
							<MenuItem name={item.name} ingredients={item.ingredients} price={item.price}/>
					))}
				</section>
		);
	}
}

export default PopularRecipes;
