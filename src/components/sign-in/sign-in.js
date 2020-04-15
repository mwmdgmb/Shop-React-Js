import React, { Component } from "react";

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
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleChangeType = () => {
    const Type = document.getElementById("Input-Type");
    if (Type.type === "password") {
      return (Type.type = "text");
    } else if (Type.type === "text") {
      return (Type.type = "password");
    }
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            id="Input-Type"
            required
          />
          <span className="type-input" onClick={this.handleChangeType}>
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
