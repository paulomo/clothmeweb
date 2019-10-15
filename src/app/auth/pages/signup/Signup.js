import React from "react";
import SignupContainer from "./component/SignupContainer";
import ConfirmSignup from "../confirmSignup/ConfirmSignup";
import * as authActions from "app/auth/store/actions";
import { FuseAnimate } from "app/Common";

class Signup extends React.Component{
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
      isFormValid: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  disableButton = () => {
    this.setState({isFormValid: this.state.isFormValid = false})
  }

  enableButton = () => {
    this.setState({isFormValid: this.state.isFormValid = true})
  }

  handleSubmit(event){
    // event.preventDefault();
    console.log(event);
  }

  handleConfirmationSubmit = (event) => {
    event.preventDefault();
  }

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
  
}

export default Signup;
