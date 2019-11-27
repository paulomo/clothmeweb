import * as Actions from "../actions";

const initialState = {
  data: null,
  loading: false,
  error: ""
};

const forgotpassword = function(state = initialState, action) {
  // console.log("background reducer");

  let response = action.response;

  switch (action.type) {
    case Actions.FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: false,
        error: ""
      };
    }
    case Actions.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        data: response,
        loading: false
      };
    }
    case Actions.FORGOT_PASSWORD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: response
      };
    }
    default: {
      return state;
    }
  }
};

export default forgotpassword;

