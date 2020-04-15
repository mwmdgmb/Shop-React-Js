import React, { Component } from "react";

// react-router-dom
import { Route, Switch, Redirect } from "react-router-dom";

// redux react-redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user.action";

// components
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ContactPage from "./pages/contact-page/contactpage";
import NotFoundPage from "./pages/NotFound/NotFound";
import CheckOut from "./pages/checkOutpage.js/checkout";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOut} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/404" exact component={NotFoundPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
