import * as Actions from "../actions";

const initialState = {
  data: [],
  newUser: null,
  loading: false,
  error: ""
};

const signup = function(state = initialState, action) {
  console.log("signup reducer");

  switch (action.type) {
    case Actions.SIGNUP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        newUser: action.payload.data,
        loading: false
      };
    }
    case Actions.SIGNUP_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        newUser: null,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default signup;

