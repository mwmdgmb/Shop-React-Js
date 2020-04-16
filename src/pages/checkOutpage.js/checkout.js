import React from "react";
// redux & react-redux
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";

// Components
import CustomButton from "../../components/custom-button/custom-button";
import CheckOutItem from "../../components/checkout-item/check-item";

// other module
import { createStructuredSelector } from "reselect";

// Style
import "./checkout.styles.scss";

const Payment = () => {
  alert("Payment was successful");
};
const Empty = () => {
  alert("Your shopping cart is empty");
};

const CheckOut = ({ cartItems, total, currentUser, history }) => (
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
    {!currentUser && (
      <h5 className="text-center">
        You must have an account to complete your purchases
      </h5>
    )}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    {currentUser ? (
      <div className="payment-button">
        <CustomButton onClick={cartItems.length === 0 ? Empty : Payment}>
          {cartItems.length === 0 ? "Empty" : "Payment"}
        </CustomButton>
      </div>
    ) : (
      <div className="payment-button">
        <CustomButton onClick={() => history.push("/sign")}>
          Account
        </CustomButton>
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CheckOut);
