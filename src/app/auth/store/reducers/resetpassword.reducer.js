import * as Actions from "../actions";

const initialState = {
  data: null,
  loading: false,
  error: ""
};

const resetpassword = function(state = initialState, action) {
  // console.log("background reducer");

  let response = action.response;

  switch (action.type) {
    case Actions.RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: false,
        error: ""
      };
    }
    case Actions.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        data: response,
        loading: false
      };
    }
    case Actions.RESET_PASSWORD_FAILURE: {
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

export default resetpassword;

