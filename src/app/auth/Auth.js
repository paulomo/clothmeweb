import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "app/auth/store/actions";
import { bindActionCreators } from "redux";
import * as Actions from "app/store/actions";

class Auth extends Component {
  /*eslint-disable-next-line no-useless-constructor*/
  constructor(props) {
    super(props);
    this.state = {
      waitAuthCheck: true
    };
  }

  componentDidMount()
  {
      // return Promise.all([
      //     // Comment the lines which you do not use
      //     this.firebaseCheck(),
      //     this.auth0Check(),
      //     this.jwtCheck()
      // ]).then(() => {
      //     this.setState({waitAuthCheck: false})
      // })
  }

  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: userActions.logoutUser,
      setUserData: userActions.setUserData,
      showMessage: Actions.showMessage,
      hideMessage: Actions.hideMessage
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Auth);
