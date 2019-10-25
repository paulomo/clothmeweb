export const CONFIRM_SIGNUP_REQUEST = 'CONFIRM_SIGNUP_REQUEST';
export const CONFIRM_SIGNUP_FAILURE = "CONFIRM_SIGNUP_FAILURE";
export const CONFIRM_SIGNUP_SUCCESS = "CONFIRM_SIGNUP_SUCCESS";

export function confirmSignup(payload) {
    return {
        type: CONFIRM_SIGNUP_REQUEST,
        payload
    }
}