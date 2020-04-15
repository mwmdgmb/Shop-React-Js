import React from "react";

// react-router-dom
import { withRouter } from "react-router-dom";

// redux react-redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

// other module
import { createStructuredSelector } from "reselect";

// components
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

// style
import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT{" "}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
