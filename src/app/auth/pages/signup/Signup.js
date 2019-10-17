import React, { Component } from "react";
import SignupContainer from "./component/SignupContainer";
import ConfirmSignup from "../confirm-signup/ConfirmSignup";
import { connect } from "react-redux";
import * as actions from "app/auth/store/actions";
import { FuseAnimate } from "app/Common";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {
        email: "",
        password: "",
        phone_number: "", // E.164 number convention
        given_name: "",
        family_name: "",
        gender: "",
        birthdate: "",
        company_name: "",
        role: "headOfficeAdmin",
        location: "headOffice",
        plan: "",
        confirmationCode: ""
      },
      newUser: null,
      isLoading: false,
      isFormValid: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  disableButton = () => {
    this.setState({ isFormValid: (this.state.isFormValid = false) });
  };

  enableButton = () => {
    this.setState({ isFormValid: (this.state.isFormValid = true) });
  };

  handleSubmit(event) {
    // event.preventDefault();
    this.props.submitSignin(event)
    console.log(event);
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
        {newUser === null ? (
          <SignupContainer
            field={field}
            isFormValid={isFormValid}
            disableButton={this.disableButton}
            enableButton={this.enableButton}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <ConfirmSignup />
        )}
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignin: event => dispatch(actions.submitSignin(event)),
    confirmSignup: event => dispatch(actions.confirmSignup(event))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
