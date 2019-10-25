import * as Actions from "../actions";

const initialState = {
  data: null,
  loading: false,
  error: ""
};

const backgroundcheck = function(state = initialState, action) {
  console.log("background reducer");

  let response = action.response;

  switch (action.type) {
    case Actions.BACKGROUND_CHECK_REQUEST: {
      return {
        ...state,
        loading: false,
        error: ""
      };
    }
    case Actions.BACKGROUND_CHECK_SUCCESS: {
      return {
        ...state,
        data: response,
        loading: false
      };
    }
    case Actions.BACKGROUND_CHECK_FAILURE: {
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

export default backgroundcheck;

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
