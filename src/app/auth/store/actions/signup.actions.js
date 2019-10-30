export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_USER_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_USER_SUCCESS = "REGISTER_SUCCESS";

export function submitSignup(payload) {
    console.log("signup action");
    return {
        type: SIGNUP_REQUEST,
        payload
    }
}


