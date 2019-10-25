import * as Actions from "../actions";

const initialState = {
  data: [],
  newUser: null,
  loading: false,
  error: ""
};

const signup = function(state = initialState, action) {
  console.log("signup reducer");

  let response = action.response;

  switch (action.type) {
    case Actions.SIGNUP_REQUEST: {
      return {
        ...state,
        loading: false,
        error: ""
      };
    }
    case Actions.SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        data: response,
        newUser: response.data.userId,
        loading: false
      };
    }
    case Actions.SIGNUP_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        newUser: null,
        error: response
      };
    }
    default: {
      return state;
    }
  }
};

export default signup;

/*
  
import * as types from '../actions';

export default function(state = [], action) {
  let response = action.response;

  switch(action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}


import * as types from '../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  register, login
});

export default rootReducer;


*/
