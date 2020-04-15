import React from "react";

// components
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
// style
import "./sign-in-and-sign-up.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
