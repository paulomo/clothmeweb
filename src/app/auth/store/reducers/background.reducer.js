import * as Actions from "../actions";

const initialState = {
  data: null,
  loading: false,
  error: ""
};

const backgroundcheck = function(state = initialState, action) {
  // console.log("background reducer");

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
