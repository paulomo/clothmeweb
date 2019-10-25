export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export function confirmSignup(payload) {
    return {
        type: RESET_PASSWORD_REQUEST,
        payload
    }
}