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
      <div>
	      <h1>Your cart:</h1>
	      <div>
          {this.props.items.map((item) => {
            return (
              <div className="collection-item avatar" key={item.id}>
                {/*<div className="item-img">*/}
                <img src={item.img} alt={item.img} className="" />
                {/*</div>*/}

                <div className="item-desc">
                  <h3 className="title">{item.title}</h3>
                  <p>{item.desc}</p>
                  <div>Price: {item.price}$</div>
                  <div>Quantity: {item.quantity}</div>
                  <div className="add-remove">
                    <Link to="/cart">
                      <i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i>
                    </Link>
                    <Link to="/cart">
                      <i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i>
                    </Link>
                  </div>
                  <button className="" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"cart-summary"}>aa {this.props.totalPrice}</div>
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
          <div className={"cart-details"}>
            {addedItems}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
	  totalPrice: state.total,
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
