import React, { Component } from "react";
import SignupContainer from "./component/SignupContainer";
import ConfirmSignup from "../confirm-signup/ConfirmSignup";
import { connect } from "react-redux";
import * as actions from "app/auth/store/thunk/signup.thunk";
import { FuseAnimate } from "app/Common";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {
        email: "",
        password: "",
        given_name: "",
        family_name: "",
        company_name: "",
        plan: "",
        confirmationCode: ""
      },
      isFormValid: false,
      planOptions: [
        "Free",
        "Standard",
        "Student Standard",
        "Student Premium",
        "Premium"
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  disableButton = () => {
    this.setState({ isFormValid: (this.state.isFormValid = false) });
  };

  enableButton = () => {
    this.setState({ isFormValid: (this.state.isFormValid = true) });
  };

  handleChange = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  };

  handleSubmit(event) {
    // event.preventDefault();
    const payload = {
      username: this.state.field.email.toLowerCase(),
      password: this.state.field.password,
      firstname: this.state.field.given_name,
      lastname: this.state.field.family_name,
      companyName: this.state.field.company_name,
      plan: "free"
    };
    this.props.signupAsync(payload)
  }

  handleConfirmationSubmit = event => {
    // event.preventDefault();
    // this.props.ConfirmSignup(event);
  };

  render() {
    const { field, newUser, isFormValid } = this.state;
    return (
      <div className={"flex-1"}>
        <FuseAnimate animation="transition.expandIn">
          <img className="" src="" alt="jfeufeuhfeuhfu" />
        </FuseAnimate>
        {newUser !== null ? (
          <SignupContainer
            field={field}
            isFormValid={isFormValid}
            disableButton={this.disableButton}
            enableButton={this.enableButton}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <ConfirmSignup />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.auth.signup.data,
    loading: state.auth.signup.loading,
    newUser: state.auth.signup.newUser,
    error: state.auth.signup.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupAsync: payload => dispatch(actions.signupAsync(payload)),
    // confirmSignup: event => dispatch(actions.confirmSignup(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
