import * as Actions from '../actions';

const initialState = {
    success: false,
    error  : {
        username: null,
        password: null
    }
};

const signin = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SIGNIN_SUCCESS:
        {
            return {
                ...initialState,
                success: true
            };
        }
        case Actions.SIGNIN_ERROR:
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

export default signin;