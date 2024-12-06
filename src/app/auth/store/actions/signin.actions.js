export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_USER_FAILURE = "SIGNIN_ERROR";
export const SIGNIN_USER_SUCCESS = "SIGNIN_SUCCESS";

export function submitSignin(payload) {
    return {
        type: SIGNIN_REQUEST,
        payload
    }
}
