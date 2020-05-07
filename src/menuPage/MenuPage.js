import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './MenuPages.scss';
import {connect} from "react-redux";
import {addToCart} from "../acrions/cartActions";

class MenuPage extends React.Component {

	handleClick = (id)=>{
		this.props.addToCart(id);
	};

	render() {
		return (
				<div className={'menu-container'}>
					{this.props.menuItems.map((item, index) => (
							<MenuItem key={item.id} id={item.id} name={item.name} ingredients={item.ingredients} price={item.price} handleClick={this.handleClick.bind(this)}/>
					))}
					</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return {
		menuItems: state.menuItems
	}
};

const mapDispatchToProps= (dispatch)=>{

	return{
		addToCart: (id)=>{dispatch(addToCart(id))}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuPage)
