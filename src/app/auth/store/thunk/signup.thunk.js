import * as signupActions from '../actions';
import * as authService from '../../../services'

export function signupAsync(data) {
    console.log("signup thunk");
    return async (dispatch) => {
        dispatch(signupActions.startSignup());
        try {
            const user = await authService.signUp(data);
            dispatch(signupActions.successSignup(user));
        }catch(error){
            dispatch(signupActions.failureSignup(error));
        }
    }
}