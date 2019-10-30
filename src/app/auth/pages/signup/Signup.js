import React, { Component } from "react";
import SignupContainer from "./component/SignupContainer";
import ConfirmSignup from "../confirm-signup/ConfirmSignup";
import { connect } from "react-redux";
import * as actions from "app/auth/store/actions";
import { FuseAnimate } from "app/Common";
import { Auth } from "aws-amplify";
import useWindowWidth from "../../../Common/hooks/useWindow";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {
        email: "makvie@yahoo.ca",
        password: "Pj.za8pa.",
        given_name: "Paul",
        family_name: "Ikhane",
        company_name: "Petbulb",
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
      // imageUrl: useWindowWidth() >= 650 ? desktopImage : mobileImage,
      // style={{backgroundImage: `url(${imageUrl})` }}
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

  async handleSubmit(event) {
    // event.preventDefault();
    console.log(this.state.field);
    try {
      const user = await Auth.signUp({
        'username': this.state.field.email.toLowerCase(),
        'password': this.state.field.password,
        'attributes': {
          'email': this.state.field.username,
          'given_name': this.state.field.given_name,
          'family_name': this.state.field.family_name,
          'custom:account_name': this.state.field.company_name,
          'custom:company_name': this.state.field.company_name,
          'custom:tenant_id': "ewyewyvwhdvwud2323232",
          'custom:location_id': "wjfhufhifh8r938e38yrjb",
          'custom:role': "headOfficeAdmin",
          'custom:location': "headOffice",
          'custom:plan': "free"
        }
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
    const payload = {
      username: this.state.field.email.toLowerCase(),
      password: this.state.field.password,
      firstname: this.state.field.given_name,
      lastname: this.state.field.family_name,
      companyName: this.state.field.company_name,
      plan: "free"
    };
    console.log(payload);
    // this.props.submitSignup(payload)
  }

  handleConfirmationSubmit = event => {
    // event.preventDefault();
    this.props.ConfirmSignup(event);
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
    submitSignup: payload => dispatch(actions.submitSignup(payload)),
    confirmSignup: event => dispatch(actions.confirmSignup(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
