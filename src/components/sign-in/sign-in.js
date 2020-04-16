import React, { useState } from "react";

// redux react-redux
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.action";

// components
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

// style
import "./sign-in.styles.scss";
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleChangeType = () => {
    const Type = document.getElementById("Input-Type");
    if (Type.type === "password") {
      return (Type.type = "text");
    } else if (Type.type === "text") {
      return (Type.type = "password");
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span> Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          id="Input-Type"
          required
        />
        <span className="type-input" onClick={handleChangeType}>
          View Password
        </span>
        <div className="btns">
          <CustomButton type="submit" value="Submit Form">
            SIGN IN
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
