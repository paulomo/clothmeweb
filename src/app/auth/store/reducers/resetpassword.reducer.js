import * as Actions from "../actions";

const initialState = {
  data: null,
  loading: false,
  error: ""
};

const resetpassword = function(state = initialState, action) {
  console.log("background reducer");

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
