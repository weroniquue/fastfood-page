import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import MainPage from "./main-page-component/MainPage";
import MenuPage from "./menuPage/MenuPage";
import Menu from "./menu/Menu";
import Cart from "./shoppingCard/Cart";

class App extends React.Component {

	render() {
		return (
				<Router>
					<Menu/>
					<div className={'main-container'}>
						<Route exact path="/" component={MainPage}/>
						<Route exact path="/menu" component={MenuPage}/>
						<Route exact path="/cart" component={Cart}/>
					</div>
				</Router>
	);
	}
	}
	export default App;
