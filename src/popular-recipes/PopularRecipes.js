import React from 'react';
import './PopularRecipes.scss'
import SectionSeparator from "../section-separator/SectionSeparator";

class PopularRecipes extends React.Component {
	render() {
		return (
				<section className={'popular-recipes'}>
					<SectionSeparator topSeparator={true}/>
					<h1>Our Most Popular Recipes</h1>
				</section>
		);
	}
}

export default PopularRecipes;
