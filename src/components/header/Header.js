import React from "react";

// redux react-redux
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { signOutStart } from "../../redux/user/user.action";

// other module
import { createStructuredSelector } from "reselect";

// components
import CartIcon from "../cart-icon/cart-icon";
import Cart from "../cart-dropdown/cart-dropdown";

// style
import {
  HeaderContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer
} from "./header-styled";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/sign">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <Cart />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
