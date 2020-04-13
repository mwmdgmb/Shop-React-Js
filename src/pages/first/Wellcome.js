import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// component
import CustomButton from "../../components/custom-button/custom-button";
// style
import "./weclome.styles.scss";
import welcome from "../../assets/welcome.gif";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to my Store</h1>
      <img src={welcome} alt="welcome" />
      <div className="moreButton">
        <Link to="shop">
          <CustomButton className="ShopButton">Shop Page</CustomButton>
        </Link>
        <Link to="/">
          <CustomButton>Home Page</CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
