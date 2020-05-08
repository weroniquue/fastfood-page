import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.scss";
import {addQuantity, removeItem, subtractQuantity} from "../acrions/cartActions";

class Cart extends Component {

	handleRemove = (id)=>{
		this.props.removeItem(id);
	};
	handleAddQuantity = (id)=>{
		this.props.addQuantity(id);
	};
	handleSubtractQuantity = (id)=>{
		this.props.subtractQuantity(id);
	};

  render() {
    let addedItems = this.props.items.length ? (
      <div className={"cart-details"}>
	      <h1>Your cart:</h1>
	      <div>
          {this.props.items.map((item) => {
            return (
              <div className="collection-item" key={item.id}>
                <img src={item.img} alt={item.img} className="collection-item-img" />
                <div className="item-desc">
                  <h3 className="title">{item.name}</h3>
                  <p>{item.ingredients}</p>
                  <div>Price: {item.price}$</div>
                  <div>
	                  Quantity:
	                  <div className="add-remove">
		                  <Link to="/cart">
	                      <i className="fa fa-plus-circle" onClick={()=>{this.handleAddQuantity(item.id)}}/>
	                    </Link>
		                  <div>{item.quantity}</div>
	                    <Link to="/cart">
	                      <i className="fa fa-minus-circle" onClick={()=>{this.handleSubtractQuantity(item.id)}}/>
	                    </Link>
	                  </div>
                  </div>
                  <button className="" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
	      <div className={"cart-summary"}>
	        <div className={"cart-summary-total"}>TOTAL: {this.props.totalPrice}$</div>
		      <button>Pay</button>
	      </div>
      </div>
    ) : (
      <div className={'empty-basket-details'}>
        <div className={"empty-basket"} />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet</p>
      </div>
    );

    return (
      <div className={"cart-container"}>
        {this.props.payment ? (
          <p>sss</p>
        ) : (
          <div>
            {addedItems}
          </div>
        )}
      </div>
    );
  }
}

function roundNumber(number) {
	var newnumber = Number(number+'').toFixed(2);
	return parseFloat(newnumber);
}


const mapStateToProps = (state) => {
	console.log(state);
  return {
    items: state.addedItems,
	  totalPrice: roundNumber(state.total),
    payment: false,
  };
};

const mapDispatchToProps = (dispatch)=>{
	return{
		removeItem: (id)=>{dispatch(removeItem(id))},
		addQuantity: (id)=>{dispatch(addQuantity(id))},
		subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
