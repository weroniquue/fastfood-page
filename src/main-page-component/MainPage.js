import React from 'react';
import WelcomeHeader from "../welocome-header/WelcomeHeader";
import OffersSection from "../offers-section/OffersSection";
import DeliverySection from "../delivery-section/DeliverySection";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import './MainPage.scss';

class MainPage extends React.Component {
	render() {
		return (
				<div className={'main-page-container'}>
					<WelcomeHeader/>
					<OffersSection/>
					<DeliverySection/>
					{/*<PopularRecipes/>*/}
				</div>
		);
	}
}

export default MainPage;
