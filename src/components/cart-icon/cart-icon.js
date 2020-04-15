import React from "react";

// redux react-redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart-selectors";

// other module
import { createStructuredSelector } from "reselect";

// style
import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => {
      dispatch(toggleCartHidden());
    }
  };
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
