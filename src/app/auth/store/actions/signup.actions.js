export const API_SIGNUP = 'API_SIGNUP';
export const SIGNUP_ERROR = "REGISTER_ERROR";
export const SIGNUP_SUCCESS = "REGISTER_SUCCESS";

export function submitSignup(payload) {
    return {
        type: API_SIGNUP,
        payload
    }
}


