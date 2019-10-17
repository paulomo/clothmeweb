import * as Actions from '../actions';

const initialState = {
    success: false,
    error  : {
        username: null,
        password: null
    }
};

const signup = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SIGNUP_SUCCESS:
        {
            return {
                ...initialState,
                success: true
            };
        }
        case Actions.SIGNUP_ERROR:
        {
            return {
                success: false,
                error  : action.payload
            };
        }
        default:
        {
            return state
        }
    }
};

export default signup;