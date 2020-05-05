import React from 'react';
import './App.scss';
import WelcomeHeader from "./welocome-header/WelcomeHeader";
import OffersSection from "./offers-section/OffersSection";
import DeliverySection from "./delivery-section/DeliverySection";
import PopularRecipes from "./popular-recipes/PopularRecipes";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import MainPage from "./main-page-component/MainPage";
import MenuPage from "./menuPage/MenuPage";
import Menu from "./menu/Menu";

class App extends React.Component {

    render() {
        return (
        		<Router>
			        <div className={'main-container'}>
				        <Menu/>
				        <Route exact path="/" component={MainPage}/>
				        <Route exact path="/menu" component={MenuPage}/>
			        </div>
		        </Router>
        );
    }
}

export default App;
