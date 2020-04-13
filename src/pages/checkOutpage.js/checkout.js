import React from "react";
// redux & react-redux
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart-selectors";

// Components

import CheckOutItem from "../../components/checkout-item/check-item";

// other module
import { createStructuredSelector } from "reselect";

// Style
import "./checkout.styles.scss";

const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOut);
