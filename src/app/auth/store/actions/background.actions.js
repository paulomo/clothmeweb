export const BACKGROUND_CHECK_REQUEST = 'BACKGROUND_CHECK_REQUEST';
export const BACKGROUND_CHECK_FAILURE = "BACKGROUND_CHECK_ERROR";
export const BACKGROUND_CHECK_SUCCESS = "BACKGROUND_CHECK_SUCCESS";


export function confirmSignup(payload) {
    return {
        type: BACKGROUND_CHECK_REQUEST,
        payload
    }
}